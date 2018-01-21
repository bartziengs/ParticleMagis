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
                    <h1 id="steps-text">How it works</h1>
                    {(this.props.target)
                        ?
                        <div className="row infotext stepsinfotext">
                            <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                                <img alt="magisco-logo" className="img img-responsive"
                                     src={require('../../images/PitchCards/Developer1.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                                <img alt="magisco-logo" className="img img-responsive"
                                     src={require('../../images/PitchCards/Developer2.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                                <img alt="magisco-logo" className="img img-responsive"
                                     src={require('../../images/PitchCards/Developer3.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                                <img alt="magisco-logo" className="img img-responsive"
                                     src={require('../../images/PitchCards/Developer4.png')}></img>
                            </div>
                        </div>
                        :
                        <div className="row infotext stepsinfotext" id="compstepsdiv">
                            <div id="compstep1" className="compsteps">
                                <img alt="magisco-logo" className="img img-responsive"
                                     src={require('../../images/PitchCards/Company1.png')} height="233.578" width="262.5"></img>
                            </div>
                            <div id="compstep2" className="compsteps">
                                <img alt="magisco-logo" className="img img-responsive"
                                     src={require('../../images/PitchCards/Company2.png')}height="233.578" width="262.5"></img>
                            </div>
                            <div id="compstep3" className="compsteps">
                                <img alt="magisco-logo" className="img img-responsive"
                                     src={require('../../images/PitchCards/Company3.png')}height="233.578" width="262.5"></img>
                            </div>
                        </div>
                    }
                </div>
            </section>
        );
    }
}

export default StepsComponent;
