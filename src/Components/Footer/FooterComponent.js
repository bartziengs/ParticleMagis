import React, { Component } from 'react';
import './FooterComponent.css';


/**
 * @author Bart Ziengs 1-12
 * DeveloperComponent for rendering information and steps
 */

class FooterComponent extends Component {
    render() {

        return (
            <div className='footer'>
                <div className="container">
                    <div className="row infotext stepsinfotext">
                        <div className="col-lg-4 col-md-6 col-xs-12 text-center footer-text">
                            Privacy Policy
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 text-center footer-text">
                            Terms of Service
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12 text-center footer-text">
                            KvK Nummer: 68904657
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;
