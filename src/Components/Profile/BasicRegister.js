import React, { Component } from 'react';
import "./LoginRegister.css";

class BasicLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            fullName: '',
            company: '',
            mail: '',
            password: '',
            password2: '',
            Dev: this.props.showDev,
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
                    {(this.state.Dev) ?
                        <div className="login-div">
                            <h2 className="login-text">Welcome new Developer!</h2>
                            <form id="login-form">
                                <div className="col-sm-6 form-group login-div">
                                    <input className="form-control" name="fullName" value={this.state.fullName} onChange={this.handleInputChange} placeholder="Enter full name here.." type="text" pattern=".{4,}" required/>
                                    <input className="form-control" name="mail" value={this.state.mail} onChange={this.handleInputChange} placeholder="Email" type="text" pattern="email" required/>
                                    <input className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" type="password" required/>
                                    <input className="form-control" name="password2" value={this.state.password2} onChange={this.handleInputChange} placeholder="Retype password" type="password" required/>
                                    <button className="btn btn-lg formbutton-comp" type="submit">Register</button>
                                    <a className="switch-text" onClick={() => {this.setState({ Dev: false})}}><p>Not a developer but a company?</p></a>
                                </div>
                            </form>
                        </div>
                        :
                        <div>
                            <h2 className="login-text">Welcome new Company!</h2>
                            <form id="login-form">
                                <div className="col-sm-6 form-group login-div">
                                    <input className="form-control" name="company" value={this.state.company} onChange={this.handleInputChange} placeholder="Enter company name here.." type="text" pattern=".{4,}" required/>
                                    <input className="form-control" name="mail" value={this.state.mail} onChange={this.handleInputChange} placeholder="Email" type="text" pattern="email" required/>
                                    <input className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" type="password" required/>
                                    <input className="form-control" name="password2" value={this.state.password2} onChange={this.handleInputChange} placeholder="Retype password" type="password" required/>
                                    <button className="btn btn-lg formbutton-comp" type="submit">Register</button>
                                    <a className="switch-text" onClick={() => {this.setState({ Dev: true})}}><p>Not a company but a developer?</p></a>
                                </div>
                            </form>
                        </div>
                    }
            </div>
        );
    }
}

export default BasicLoginComponent;