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
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <img alt="chickie" className="img img-responsive" src={require('../../../images/Maggy.png')}></img>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 text-center infotext">
                            <h2>What do I do?</h2>
                            <p>Hello, nice to meet you, my name is Maggy and I will explain to you what we're up to at Magisco</p>
                            <h2>Thorough screening</h2>
                            <p>Our screening consists of several phases that are supported by a labor psychologist to ensure quality</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="filmpje col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="center-block" src="https://www.youtube.com/embed/dDdczTHU_DA?&rel=0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default DeveloperInformationComponent;
