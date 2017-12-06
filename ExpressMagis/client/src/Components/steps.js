import React, { Component } from 'react';

/**
 * @author Bart Ziengs 1-12
 * CompanyComponent for rendering information and steps
 */

class StepsComponent extends Component {
    render() {
        return (
            <section id="steps">
                <div className="container">
                    <div className="row infotext stepsinfotext">
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <span>&#9312;</span>
                        <p className="col-xs-12">Sign up on the platform and Maggy will drive away the recruiters</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <span>&#9313;</span>
                        <p className="col-xs-12">Discuss with Maggy your salary and skills you want to work with</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <span>&#9314;</span>
                        <p className="col-xs-12">Maggy will screen your desired company culture and talents within 5 minutes</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <span>&#9315;</span>
                        <p className="col-xs-12">Maggy will only look for fitting companies who can apply to you</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default StepsComponent;
