/**
 * DiGiHealth
 */

import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();

Router.run(routes, Router.HistoryLocation, (Root, routerState) => {
  React.render(
    <Provider store={store}>
      {() => <Root routerState={routerState} />}
    </Provider>,
    document.body
  );
});
