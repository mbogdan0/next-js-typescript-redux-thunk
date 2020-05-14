import Cookies from 'universal-cookie';
import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import { NextPageContext } from 'next/dist/next-server/lib/utils';
import { Provider, useSelector } from 'react-redux';
import { initializeStore } from '../redux/store';
import { AppState } from '../redux/root-reducer';
import { GlobalStyle } from '../styled/global';
import { ThemeState, EnumTheme } from '../styled/theme/types';
import { redTheme } from '../styled/designs/red-theme';
import { greenTheme } from '../styled/designs/green-theme';
import { greyTheme } from '../styled/designs/grey-theme';
import { blueTheme } from '../styled/designs/blue-theme';

let reduxStore;
function getOrInitializeStore(initialState?) {
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }
  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }
  return reduxStore;
}

type ServerTheme = {
  theme: ThemeState;
};
function variablesFromCookies(cookies: string): ServerTheme {
  const defaultKeyPalette: EnumTheme = 'grey';
  let currentTheme = greyTheme;
  const cookiesObj = new Cookies(cookies);
  const userCookie = cookiesObj.get('selectedThemePalette');
  if (!userCookie) {
    console.log('no val here');
    return undefined;
  }
  const themeVal = userCookie || defaultKeyPalette;
  console.log('themeVal', themeVal)
  if (themeVal === 'green') {
    currentTheme = greenTheme;
  }
  if (themeVal === 'red') {
    currentTheme = redTheme;
  }
  if (themeVal === 'grey') {
    currentTheme = greyTheme;
  }
  if (themeVal === 'blue') {
    currentTheme = blueTheme;
  }
  return {
    theme: {
      selected: themeVal,
      currentTheme,
    },
  };
}

export const wrapPage = (PageComponent: NextPage) => {
  const WithStyles = ({ ...props }): ReactElement => {
    const theme = useSelector<AppState, ThemeState>((state) => state.theme);
    return (
      <ThemeProvider theme={theme.currentTheme}>
        <GlobalStyle />
        <PageComponent {...props} />
      </ThemeProvider>
    );
  };
  type WithReduxProps = { initialReduxState: AppState };
  const WithRedux = ({ initialReduxState, ...props }: WithReduxProps): ReactElement => {
    const store = getOrInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <WithStyles {...props} />
      </Provider>
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `wrapPage(${displayName})`;
  }

  if (PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (context: NextPageContext & {reduxStore: unknown}) => {
      const cookieVar = variablesFromCookies(context?.req?.headers?.cookie);
      const store = getOrInitializeStore(cookieVar);
      // eslint-disable-next-line
      context.reduxStore = store;
      const pageProps = typeof PageComponent.getInitialProps === 'function'
        ? await PageComponent.getInitialProps(context) : {};
      return {
        ...pageProps,
        initialReduxState: store.getState(),
      };
    };
  }
  return WithRedux;
};
