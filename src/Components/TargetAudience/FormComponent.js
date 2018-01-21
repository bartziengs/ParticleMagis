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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.form = this.form.bind(this);
    this.state = {
        formSent: null,
        fullName: '',
        mail: ''
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
    fetch('http://gogs.magisco.nl/send', {
      method: 'POST',
      headers: new Headers ({
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
      }),
      body: JSON.stringify({
          name: this.state.fullName,
          email: this.state.mail
      })
    })
    .then(response => response.json()).then((responseJson) => {
        if (responseJson.success) {
            this.setState({formSent: true})
        } else {
            this.setState({formSent: false})
        }
    }).catch((error) => {
        console.error(error);
        this.setState({formSent: false})
    });
  }



  /**
   * the original form
   *
   */
  form() {
    return (
        <section id="form">
            <div id="formdiv">
                {(this.props.target)
                    ?
                    <iframe id="devgoogleform"
                            src="https://docs.google.com/forms/d/e/1FAIpQLScWYTwvBQ1a-UuX2I7gT9SOUI1Uvgf7Uzea2SgjJQu8AAXxJA/viewform?embedded=true"
                            width="100%" height="600" scrolling="no" frameborder="0" marginheight="0"
                            marginwidth="0">Loading...</iframe>

                    :
                    <iframe id="compgoogleform"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSc2aHtcYGJmRweOplaa8bg_aSTgFx5je_pTW097oUZ7IH6Ddw/viewform?embedded=true"
                            width="100%" height="600" scrolling="no" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                }</div>
        </section>

    );
  }

  render = () => {
      return this.handleRendering()
  }
}

export default FormComponent;

/**
 * <div className="container" id="Register">
 <h1 className="well" style={{textAlign: 'center'}}>Interested? Let Maggy help you!</h1>
 <div className="col-lg-12 well">
 <div className="row">
 <form id="formform" onSubmit={this.handleSubmit} >
 <div className="col-sm-12">
 <div className="row">
 <div className="col-sm-6 form-group">
 <label>Your Name</label>
 <input className="form-control" name="fullName" value={this.state.fullName} onChange={this.handleInputChange} placeholder="Enter full name here.." type="text" pattern=".{4,}" required/>
 </div>
 <div className="col-sm-6 form-group">
 <label>Your Email</label>
 <input className="form-control" name="mail" value={this.state.mail} onChange={this.handleInputChange} placeholder="Enter Email here.." type="email" required/>
 </div>
 </div>
 <button className="btn btn-lg formbutton-dev" type="submit">Yes, I am interested</button>
 </div>
 </form>
 </div>
 </div>
 </div>
 */