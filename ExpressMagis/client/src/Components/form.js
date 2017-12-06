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
                    <h1 className="well" style={{ textAlign: 'center' }}>Thank you! We'll be in touch with you soon!</h1>
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
                    <h1 className="well" style={{ textAlign: 'center' }}>Sorry something went wrong, please refresh and try again later</h1>
                    <iframe title="notSentFrame" width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
                </div>
            </section>
        );
    }
}

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { formSent: null };
        this.SubmitHandle = this.SubmitHandle.bind(this);
    }


    SubmitHandle = event => {
        event.preventDefault();
        if (this.state.formSent === null) {
            this.setState({ formSent: true })
        }
        var frm = document.getElementById('formform');
        $("#formform").attr('target', 'dummyframe');
        frm.submit(function (ev) {
            ev.preventDefault();
            $.ajax({
                type: frm.attr('method'),
                url: frm.attr('action'),
                data: frm.serialize(),
                target: 'dummyframe',
                success: function (data) {
                    console.log('Submission was successful.');
                    console.log(data);
                },
                error: function (data) {
                    console.log('An error occurred.');
                    console.log(data);
                },
            });
        })
        return true;
    }
    /**
     * collects the data from the form and passes it to the express backend where it can be mailed
     */
    render = () => {
        if (this.state.formSent === null) {
            return <FillInFormComponent />
        } else {
            if (this.state.formSent) {
                return <FormSent />
            } else {
                return <FormFailed />
            }
        }
    }
}

/**
 * the original form
 */
class FillInFormComponent extends Component {

    constructor(props) {
        super(props);
        
    }

    


    render = () => (
        <section id="form">
            <div className="container" id="Register">
                <h1 className="well" style={{ textAlign: 'center' }}>Interested? Let Maggy help you!</h1>
                <div className="col-lg-12 well">
                    <div className="row">
                        <iframe title="formFrame" width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
                        <form id="formform" action="/cgi-bin/sendmail.pl" method="POST" onSubmit={this.SubmitHandle} >
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
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input className="form-control" name="subject" placeholder="What is the subject?" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" name="message" placeholder="Leave a message for us here.." rows="8" required />
                                </div>
                                <button className="btn btn-lg formbutton" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default FormComponent;
