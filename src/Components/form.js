import React, { Component } from 'react';
import nodemailer from 'nodemailer';

/**
 * @author Millen van Osch
 * Contact form in jsx sytanx
 */


class FormComponent extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("sendin data");
    var formData = {
        name: document.getElementsByName("name")[0].value,
        email: document.getElementsByName("email")[0].value,
        subject: document.getElementsByName("subject")[0].value,
        message: document.getElementsByName("message")[0].value
    };
    let transporter = nodemailer.createTransport({
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
    });
    transporter.sendMail({
        from: formData.email,
        to: 'millen_vanosch@hotmail.com',
        subject: formData.subject,
        text: formData.message
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
    });
  }


  render = () => {
    return (
      <section id="form">
        <div className="container" id="Register">
          <h1 className="well">Stay in contact with us!</h1>
          <div className="col-lg-12 well">
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <label>Your Name</label>
                      <input className="form-control" name="name" placeholder="Enter full name here.." type="text" />
                    </div>
                    <div className="col-sm-6 form-group">
                      <label>Your Email</label>
                      <input className="form-control" name="email" placeholder="Enter Email here.." type="text" data-rule-email="true" data-msg="Please enter a valid email" />
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
                    <textarea className="form-control" name="message" placeholder="Leave a message for us here.." rows="8" data-rule-required="true" data-msg="Please leave a message for us" />
                  </div>
                  <button className="btn btn-lg btn-info" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FormComponent;
