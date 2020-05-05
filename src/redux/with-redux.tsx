import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { NextPageContext } from 'next/dist/next-server/lib/utils';
import { Provider } from 'react-redux';
import { initializeStore } from './store';
import { AppState } from './root-reducer';


let reduxStore;
function getOrInitializeStore(initialState = {}) {
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }
  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }
  return reduxStore;
}

type WithReduxProps = {
  initialReduxState: AppState;
}

export const withRedux = (PageComponent: NextPage, { ssr = true } = {}) => {
  const WithRedux = ({ initialReduxState, ...props }: WithReduxProps): ReactElement => {
    const store = getOrInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (context: NextPageContext & {reduxStore: any}) => {
      const store: any = getOrInitializeStore();
      // eslint-disable-next-line
      context.reduxStore = store;
      const pageProps = typeof PageComponent.getInitialProps === 'function'
        ? await PageComponent.getInitialProps(context)
        : {};
      return {
        ...pageProps,
        initialReduxState: store.getState(),
      };
    };
  }
  return WithRedux;
};
