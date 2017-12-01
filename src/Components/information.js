import React, { Component } from 'react';

/**
 * @author Bart Ziengs 1-12
 * DeveloperComponent for rendering information and steps
 */

class InformationComponent extends Component {
    render() {
        return (
            <section id="info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <img alt="chickie" className="img img-responsive" src={require('../images/Maggy.png')}></img>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 text-center infotext">
                            <h2>What do I do?</h2>
                            <p>Hello, nice to meet you, my name is Maggy and I will explain to you what we're up to at Magisco</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12 text-center infotext funnelinfo">
                        <h2>Thourough screening</h2>
                        <p>Our screening consists of several phases to ensure quality</p>
                    </div>
                    <div className="col-lg-8 col-md-6 col-xs-12">
                        <img alt="funnel" className="img img-responsive" src={require('../images/funnel.png')}></img>
                    </div>
                </div>
            </section >
        );
    }
}

export default InformationComponent;