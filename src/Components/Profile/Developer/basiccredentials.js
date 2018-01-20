import React, { Component } from 'react';

/**
 * @author Bart Ziengs 14-01
 * 
 */

class BasicCredentialsComponent extends Component {

    renderQuestion = question => {
        return (
            <div>

            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            placeOfResidence: '',
            emailAdress: '',
            error: false,
        }

    }

    renderError = () => {
        if (this.state.error) {
            return (
                <div className="alert alert-danger">
                    {this.state.error}
                </div>
            );
        }
    }

    validateInput = () => {
        if (this.state.fullName === '') {
            this.setState({ error: "Please enter full name" });
        } else if (this.state.placeOfResidence === '') {
            this.setState({ error: "Please enter place of residence" });
        } else if (this.state.emailAdress === '') {
            this.setState({ error: "Please enter mail address" });
        } else {
            this.setState({ error: false });
            return true;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = {
            fullName: this.state.fullName,
            contactNumber: this.state.contactNumber,
            shippingAddress: this.state.shippingAddress
        };
        if (this._validateInput()) {
            this.props.updateFormData(formData);
        }
    }

    render = () => {

        let errorMessage = this.renderError();

        return (
            <div>
                <h1>Enter personal credentials</h1>
                {errorMessage}
                <form>
                    {this.props.questions.map(question => {
                        return this.renderQuestion(question);
                    })
                    }
                    <input type="submit" className="btn btn-succes" />
                </form>
            </div>

        );
    }

}

export default BasicCredentialsComponent;
