
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

import React, { Component } from 'react';
import { KateForm, withKateForm } from 'kate-form';

class KateClientForm extends Component {
  componentWillMount() {
    const {
      Form, setData, data,
      getValues, setValues,
      app, params: ctxParams,
      match: { params: urlParams },
    } = this.props;
    const params = Object.assign(urlParams, ctxParams);
    this.APP = app;
    this.FORM = new Form({
      data,
      setData,
      getData: this.getData,
      title: Form.title,
      getValues,
      setValues,
      app,
    }, params);
  }
  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }
  componentDidUpdate() {
    if (this.FORM.afterUpdate) this.FORM.afterUpdate();
  }
  componentWillUnmount() {
    this.APP.clearFormParams(this.props.Form);
  }
  getData = () => this.props.data;
  render() {
    return (
      <KateForm path="form" />
    );
  }
}

// export default connect(state => ({ data: state['kate-form'].form }), {
//   setData: getSetData('form'),
// })(KateClientForm);

export default withKateForm(KateClientForm, 'form');
