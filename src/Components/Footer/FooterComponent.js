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
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center footer-text">
                            Products
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center footer-text">
                            Company
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center footer-text">
                            Contact
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center footer-text">
                            Connect
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;
