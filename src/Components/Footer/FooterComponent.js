import React, { Component } from 'react';
import { Link } from 'react-router';
import './FooterComponent.css';


/**
 * @author Bart Ziengs 1-12
 * DeveloperComponent for rendering information and steps
 */

class FooterComponent extends Component {
    render() {

        return (
            <div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8AJFccC-F4XEvrF2EhTE9G5hhzFLI8zbWsI5xWIAVPhXscQ/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                    <div className='footer' id="foot">
                        <div className="container">
                            <div className="row infotext stepsinfotext">
                                <div className="col-lg-4 col-md-6 col-xs-12 text-center footer-text">
                                    <Link to="/privacy">Privacy Policy</Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-xs-12 text-center footer-text">
                                    <Link to="/terms">Terms of Service</Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-xs-12 text-center footer-text">
                                    KvK Nummer: 68904657
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default FooterComponent;
