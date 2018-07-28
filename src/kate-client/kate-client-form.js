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
