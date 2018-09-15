
/*
Copyright © 2018 Roman Nep <neproman@gmail.com>

This file is part of library kate-client.

Library kate-client is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Library kate-client is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with library kate-client.  If not, see <https://www.gnu.org/licenses/>.
*/

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
