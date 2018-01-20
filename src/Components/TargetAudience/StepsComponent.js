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
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center" >
                        <img alt="magisco-logo" className="img img-responsive" src={require('../../images/PitchCards/Developer1.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <img alt="magisco-logo" className="img img-responsive" src={require('../../images/PitchCards/Developer2.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <img alt="magisco-logo" className="img img-responsive" src={require('../../images/PitchCards/Developer3.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                        <img alt="magisco-logo" className="img img-responsive" src={require('../../images/PitchCards/Developer4.png')}></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default StepsComponent;
