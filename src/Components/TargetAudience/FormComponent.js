import React, { Component } from 'react';
import $ from 'jquery';

/**
 * @author Millen van Osch
 * Contact form in jsx sytanx
 */

/**
 * replaces the form when it has been submitted and successfully send.
 */
class FormSent extends Component {
    render = () => {
        return (
            <section id="form">
                <div className="container" id="Register">
                    <h1 className="well" style={{textAlign: 'center'}}>Thank you! We'll be in touch with you soon!</h1>
                    <iframe title="sentFrame" width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
                </div>
            </section>
        );
    }
}

/**
 * replaces the form when it has been submitted but couldn't be send because of failure
 */
class FormFailed extends Component {
    render = () => {
        return (
            <section id="form">
                <div className="container" id="Register">
                    <h1 className="well" style={{textAlign: 'center'}}>Sorry something went wrong, please refresh and try again later</h1>
                    <iframe title="notSentFrame" width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
                </div>
            </section>
        );
    }
}

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.handleRendering = this.handleRendering.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.form = this.form.bind(this);
    this.state = {formSent: null};
  }

    /**
     * handles the conditional rendering
     * @returns the form
     */
  handleRendering = () => {
    if (this.state.formSent === null) {
        return this.form()
    } else {
        if (this.state.formSent) {
            return <div><FormSent /></div>
        } else {
            return <div><FormFailed /></div>
        }
    }
  }
  /**
   * collects the data from the form and passes it to the express backend where it can be mailed
   * this works with a nodejs backend, in this case Express.
   */
  handleSubmit(event){
    event.preventDefault();
    console.log("sendin data");

    fetch('/send', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: document.getElementsByName('name')[0].value,
          email: document.getElementsByName('email')[0].value
      })
    }).then((response) => response.json()).then((responseJson) => {
        if (responseJson.success) {
            this.setState({formSent: true})
            console.log('form is sent')
        } else {
            this.setState({formSent: false})
            console.log('form is not sent')
        }
    }).catch((error) => {
        console.error(error);
        this.setState({formSent: false})
    });
  }



  /**
   * the original form
   */
  form() {
    return (
        <section id="form">
            <div className="container" id="Register">
                <h1 className="well" style={{textAlign: 'center'}}>Interested? Let Maggy help you!</h1>
                <div className="col-lg-12 well">
                    <div className="row">
                        <iframe title="formFrame" width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
                        <form id="formform" onSubmit={this.handleSubmit} >
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label>Your Name</label>
                                        <input className="form-control" name="name" placeholder="Enter full name here.." type="text" pattern=".{4,}" required/>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label>Your Email</label>
                                        <input className="form-control" name="email" placeholder="Enter Email here.." type="email" required/>
                                    </div>
                                </div>
                                <button className="btn btn-lg formbutton-dev" type="submit">Yes, I am interested</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
  }

  render = () => {
      return this.handleRendering()
  }
}

export default FormComponent;
