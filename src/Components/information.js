import React, { Component } from 'react';

/**
 * @author Bart Ziengs 1-12
 * DeveloperComponent for rendering information and steps
 */

class InformationComponent extends Component {
  render() {
    return ( 
       <div className="container">
           <div className="col-lg-5 col-md 6 col-xs-12">
                <img alt="chickie" className="img img-responsive" src={require('../images/Maggy.png')}></img>
            </div>
            <div className="col-lg-6 col-lg-offset-1 col-md-6 col-xs-12 text-justify">
                <p>Hello, nice to meet you, my name is Maggy   lo, nice to meet you, my name is Magglo, nice to meet you, my name is Magglo, nice to meet you, my name is Magglo, nice to meet you, my name is Magglo, nice to meet you, my name is Magg</p>
            </div>
       </div>
    );
  }
}

export default InformationComponent;
