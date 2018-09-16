
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

import React, { Component, Fragment } from 'react';

import { MainLayout } from 'kate-form-material-kit-react';

import KateClientForm from './kate-client-form';


class KateComponent extends Component {
  state = {
    alerts: [],
  };
  componentWillMount() {
    const { app: App, match } = this.props;
    this.APP = new App({
      history: this.props.history,
      setFormParams: this.setFormParams,
      path: App.path,
      showAlert: this.showAlert,
    });
    const path = match.path === '/' ? '' : match.path;
    this.path = match.path;
    const routes = this.APP.forms.map(item => ({
      path: `${path}${item.path}`,
      form: item,
      component: props => (
        <KateClientForm
          Form={item}
          app={this.APP}
          {...props}
        />
      ),
    }));

    const menu = this.APP.menu.map(item => ({
      path: `${path}${item.form.path}`,
      title: item.title,
    }));

    if (menu[0]) {
      routes.push({ path: `${match.url}/`, redirect: menu[0].path });
    }
    this.setState({
      routes,
      menu,
    });
    this.showAlert({
      type: 'info',
      title: 'Platform initialized',
      timeout: 3,
    });
  }
  setFormParams = (form, params) => {
    const { routes } = this.state;
    const formRoute = routes.find(item => item.form === form);
    if (formRoute) {
      formRoute.params = params;
      formRoute.component = props => (
        <KateClientForm
          Form={formRoute.form}
          app={this.APP}
          params={formRoute.params}
          key={formRoute.path}
          {...props}
        />
      );
    }
    this.setState({ routes });
  }
  showAlert = (alert) => {
    const { alerts } = this.state;
    // eslint-disable-next-line no-param-reassign
    alert.timestamp = new Date().getTime() + ((alert.timeout || 2) * 1000);
    alerts.push(alert);
    this.setState({ alerts });
    setTimeout(() => {
      const { alerts: alertsToCheck } = this.state;
      const now = new Date().getTime();
      const newAlerts = alertsToCheck.filter(item => item.timestamp > now);
      this.setState({ alerts: newAlerts });
    }, ((alert.timeout || 2) * 1000) + 100);
  }
  render() {
    const { app, classes, ...rest } = this.props;
    const { routes, menu, alerts } = this.state;
    return (
      <Fragment>
        <MainLayout
          routes={routes}
          menu={menu}
          titlePath={this.path}
          title={app.title}
          logo={app.logo}
          alerts={alerts}
          {...rest}
        />
      </Fragment>
    );
  }
}

export default KateComponent;
