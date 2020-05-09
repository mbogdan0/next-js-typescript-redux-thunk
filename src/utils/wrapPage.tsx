import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import { NextPageContext } from 'next/dist/next-server/lib/utils';
import { Provider, useSelector } from 'react-redux';
import { initializeStore } from '../redux/store';
import { AppState } from '../redux/root-reducer';
import { GlobalStyle } from '../styled/global';
import { ThemeState } from '../styled/theme/types';

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
      const store = getOrInitializeStore();
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
