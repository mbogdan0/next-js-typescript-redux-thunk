import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { initializeStore } from './store';

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

export const withRedux = (PageComponent, { ssr = true } = {}) => {
  const WithRedux = ({ initialReduxState, ...props }: any) => {
    const store = getOrInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  // Make sure people don't use this HOC on _app.js level
  if (process.env.NODE_ENV !== 'production') {
    const isAppHoc = PageComponent === App || PageComponent.prototype instanceof App;
    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (context: any) => {
      const reduxStore = getOrInitializeStore();

      // Provide the store to getInitialProps of pages
      context.reduxStore = reduxStore;
      const pageProps = typeof PageComponent.getInitialProps === 'function'
        ? await PageComponent.getInitialProps(context)
        : {};
      return {
        ...pageProps,
        initialReduxState: reduxStore.getState(),
      };
    };
  }
  return WithRedux;
};
