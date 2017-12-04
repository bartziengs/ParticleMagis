import React, { Component } from 'react';

/**
 * @author Bart Ziengs 1-12
 * DeveloperComponent for rendering information and steps
 */

class DeveloperComponent extends Component {
  render() {
    return (
        <div className="container contenttext col-lg-8 col-lg-offset-2 text-center">
            <h3>Are you frustrated by recruiters? Are you a junior-developer? Let me take care of you!</h3>
            {/* <h1>Choose a company that fits your personality!</h1> */}
            {/* <h3>Frustrated by all traditional recruitment processes? According to your preferences, Magisco will offer you a top-10 list of the best fitting companies.</h3> */}
        </div>
    );
  }
}

export default DeveloperComponent;
