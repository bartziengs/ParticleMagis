import React, { Component } from 'react';
import Login from './BasicLogin';
import Register from './BasicRegister';

class LoginRegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.renderLogin = this.renderLogin.bind(this);
        this.renderRegister = this.renderRegister.bind(this);
        this.state = {
            login: this.props.login
        };
    }
    renderLogin() {
        return (
            <div>
                <Login />
                <div className="switch-logreg">
                    <a onClick={() => {this.setState({ login: false})}}><p>No account yet?</p></a>
                    <a onClick={() => {alert('')}}><p>Forgot password?</p></a>
                </div>
            </div>
        );
    }
    renderRegister() {
        return (
          <div>
              <Register showDev={this.props.showDev}/>
              <div className="switch-reglog">
                  <a onClick={() => {this.setState({ login: true})}}><p>Already have an account?</p></a>
              </div>
          </div>
        );
    }
    render () {
        return (this.state.login) ? this.renderLogin() : this.renderRegister();
    }
}
export default LoginRegisterComponent;