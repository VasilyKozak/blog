import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'src/components/button';
import Input from 'src/components/input';
import * as Actions from './actions';
import style from "../sign-up/style.css";

class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    singInAction: PropTypes.func.isRequired,
  };

  onSubmit = () => {
    const { dataForm } = this.props;
    this.props.singInAction(dataForm);
  };

  render() {
    return (
      <div className={style.signUpWrapper}>
        <div>
          <div>
            <Input
                type="text"
                id="login"
                placeholder="Login"
                value={this.props.dataForm.login}
                onChange={this.props.changeFieldAction}
              />
          </div>
        </div>
        <div>
          <div>
            <Input
                type="password"
                id="password"
                placeholder="Password"
                value={this.props.dataForm.password}
                onChange={this.props.changeFieldAction}
              />
          </div>
        </div>
        <Button onClick={this.onSubmit}>Login</Button>
      </div>
    );
  }
}

const stateToProps = (state) => ({
  dataForm: state.signIn.dataForm
});

export default connect(stateToProps, Actions)(SignIn);
