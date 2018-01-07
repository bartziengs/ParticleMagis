import React, { Component } from 'react';

/**
 * @author Bart Ziengs 1-12
 * DeveloperComponent for rendering information and steps
 */

class DeveloperInformationComponent extends Component {
    render() {
        return (
            <section id="info">
                <div className="container">
                    <div className="row infotext">
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            Hier komt wat company informatie
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            Hier komt wat company informatie
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        </div>                                  
                    </div>
                    <div className="row infotext">
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-white-transparent.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-transparent.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-white-transparent.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-transparent.png')}></img>
                        </div> 
                    </div>
                    <div className="row infotext">
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-white-transparent.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-transparent.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-white-transparent.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-transparent.png')}></img>
                        </div> 
                    </div>
                    <div className="row infotext">
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-white-transparent.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-transparent.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-white-transparent.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                            <img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-transparent.png')}></img>
                        </div> 
                    </div>                                        
                </div>
            </section >
        );
    }
}

export default DeveloperInformationComponent;
