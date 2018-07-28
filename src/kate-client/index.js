 import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { KateFormProvider, getIn } from 'kate-form';
import { connectors, Elements } from 'kate-form-material-kit-react';

import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

import KateComponent from './kate-component';

import App from './classes/App';
import Form from './classes/Form';


const KateClient = ({ app }) => {
  const history = createBrowserHistory();
  const store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <KateFormProvider connectors={connectors}>
        <Router history={history}>
          <Fragment>
            <Route path={app.path} render={props => <KateComponent app={app} {...props} />} />
            {
              app.path !== '/' && (
                <Route exact path="/" render={() => <Redirect to={app.path} />} />
              )
            }
          </Fragment>
        </Router>
      </KateFormProvider>
    </Provider>,
    document.getElementById('root'),
  );

  registerServiceWorker();
};

export default KateClient;
export {
  App,
  Form,
  Elements,
  getIn,
};
