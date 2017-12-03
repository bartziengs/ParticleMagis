import React, { Component } from 'react';

/**
 * @author Millen van Osch
 * Contact form in jsx sytanx
 */


class FormComponent extends Component {

  render = () => {
    return (
      <section id="form">
        <div className="container" id="Register">
          <h1 className="well">Interested? Let Maggy help you! </h1>
          <div className="col-lg-12 well">
            <div className="row">
              <form>
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <label>First Name</label>
                      <input className="form-control" placeholder="Enter first name here.." type="text" />
                    </div>
                    <div className="col-sm-6 form-group">
                      <label>Last Name</label>
                      <input className="form-control" placeholder="Enter last name here.." type="text" />
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
                    <label>Email Address</label>
                    <input className="form-control" placeholder="Enter email address Here.." type="text" />
                  </div>
                  <div className="form-group">
                    <label>Website</label>
                    <input className="form-control" placeholder="Enter website url Here.." type="text" />
                  </div>
                  <button className="btn btn-lg btn-info" type="button">Submit</button>
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
