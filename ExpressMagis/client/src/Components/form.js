import React, { Component } from 'react';

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
                    <h1 className="well" style={{ textAlign: 'center' }}>Thank you! We'll be in touch with you soon!</h1>
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
                    <h1 className="well" style={{ textAlign: 'center' }}>Sorry something went wrong, please refresh and try again later</h1>
                </div>
            </section>
        );
    }
}

class FormComponent extends Component {
    constructor(props) {
        super(props);
        // this.handleRendering = this.handleRendering.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.SubmitHandle = this.SubmitHandle.bind(this);
        this.state = { formSent: 3 };
    }

     /**
     * collects the data from the form and passes it to the express backend where it can be mailed
     */
    // handleSubmit(event) {
    //     event.preventDefault();
    //     console.log("sendin data");

    //     fetch('/send', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: document.getElementsByName('name')[0].value,
    //             email: document.getElementsByName('email')[0].value,
    //             subject: document.getElementsByName('subject')[0].value,
    //             message: document.getElementsByName('message')[0].value
    //         })
    //     }).then((response) => response.json()).then((responseJson) => {
    //         if (responseJson.success) {
    //             this.setState({ formSent: true })
    //             console.log('form is sent')
    //         } else {
    //             this.setState({ formSent: false })
    //             console.log('form is not sent')
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //         this.setState({ formSent: false })
    //     });
    // }
    SubmitHandle = () => {
        if (this.state.formSent === 3) {
            this.setState({ formSent: true })
        }
    }

    render = () => {
        if (this.state.formSent === 3) {
            return <FillInFormComponent/>
        } else {
            if (this.state.formSent) {
                return <div><FormSent /></div>
            } else if (!this.state.formSent) {
                return <div><FormFailed /></div>
            }
        }
    }
}
    /**
     * the original form
     */
    class FillInFormComponent extends Component{

        render = () => {
               return( <section id="form">
                <div className="container" id="Register">
                    <h1 className="well" style={{ textAlign: 'center' }}>Interested? Let Maggy help you!</h1>
                    <div className="col-lg-12 well">
                        <div className="row">
                            <iframe title="dummy" width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
                            <form action="/cgi-bin/sendmail.pl" method="POST" target="dummyframe" >
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-6 form-group">
                                            <label>Your Name</label>
                                            <input className="form-control" name="name" placeholder="Enter full name here.." type="text" pattern=".{4,}" required />
                                        </div>
                                        <div className="col-sm-6 form-group">
                                            <label>Your Email</label>
                                            <input className="form-control" name="email" placeholder="Enter Email here.." type="email" required />
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                    <div className="col-sm-4 form-group">
                                      <label>City</label>
                                      <input className="form-control" placeholder="Enter city name here.." type="text" />
                                    </div>
                                    <div className="col-sm-4 form-group">
                                      <label>ZIP</label>
                                      <input className="form-control" placeholder="Enter ZIP code Here.." type="text" />
                                    </div>
                                    <div className="col-sm-4 form-group">
                                      <label>House number</label>
                                      <input className="form-control" placeholder="Enter house number Here.." type="text" />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label>Phone Number</label>
                                    <input className="form-control" placeholder="Enter phone number here.." type="text" />
                                  </div> */}
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input className="form-control" name="subject" placeholder="What is the subject?" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" name="message" placeholder="Leave a message for us here.." rows="8" pattern=".{8,}" required />
                                    </div>
                                    <button className="btn btn-lg formbutton" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>);
        }
    }


export default FormComponent;
