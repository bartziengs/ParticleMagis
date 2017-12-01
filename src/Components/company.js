import React, { Component } from 'react';

/**
 * @author Bart Ziengs 1-12
 * CompanyComponent for rendering information and steps
 */

class CompanyComponent extends Component {
  render() {
    return (
      <div className="container contenttext col-lg-12 text-center">
        <h3>Are you from a company? Let Maggy care about you </h3>
        <ol>
          <li>Sign up for free</li>
          <li>Set your preferences for your future employee</li>
          <li>We will provide you with the best fitting developer</li>
        </ol>
    </div>  
    );
  }
}

export default CompanyComponent;
