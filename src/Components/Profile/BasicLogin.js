import React, { Component } from 'react';
import "./LoginRegister.css";

class BasicLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            mail: '',
            password: ''
        };
    }
    handleInputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="login-container">
                <img alt="magisco-logo" className="img img-responsive" id="login-img" src={require('../../images/Magisco logo-3/PNG/logo-transparent.png')}></img>
                <h2 className="login-text">Log in with social media</h2>
                    <button className="social-btn btn btn-lg facebook-btn">Log in with FaceBook</button>
                    <button className="social-btn btn btn-lg google-btn">Log in with Google+</button>
                    <button className="social-btn btn btn-lg linkedin-btn">Log in with Linkedin</button>
                <h2 className="login-text">Or log in with your Email</h2>
                <form id="login-form">
                    <div className="col-sm-6 form-group login-div">
                        <input className="form-control" name="Email" value={this.state.mail} onChange={this.handleInputChange} placeholder="Email" type="text" pattern="email" required/>
                        <input className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" type="password" required/>
                        <button className="btn btn-lg formbutton-dev" type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BasicLoginComponent;