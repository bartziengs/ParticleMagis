import React, { Component } from 'react';
import Particles from '../../node_modules/react-particles-js/lib/particles';
import DeveloperComponent from './developer';
import CompanyComponent from './company';
import FormComponent from './form';
import InformationComponent from './information';

/**
 * @author Bart Ziengs, 1-12-17
 * This is the main component, rendering the particle background and 
 * if applicable other infromation and procedures
 */

class ParticleComponent extends Component {

    /*
    *Baisc constructor with inhereted properties from component, state is used to keep 
    *track of what should be rendered, the functions PickDeveloper need to be binded explicitly in the
    *new syntax 
    **/
    constructor(props) {
        super(props);
        this.state = {
            showDeveloper: true,
        }

        this.pickDeveloper = this.pickDeveloper.bind(this);
        this.pickCompany = this.pickCompany.bind(this);
    }

    /**
     * Shows on the canvas what is applicable to the selected entity
     */
    handleRendering = () => {
        if (this.state.showDeveloper) {
            return <div
                className="developerUSP">
                <DeveloperComponent />
            </div>
        } else {
            return <div
                className="CompanyUSP">
                <CompanyComponent />
            </div>
        }
    }

    /**
     * renders forms and steps if and only if developer is selected
     */
    handleAdditionalInfo = () => {
        if (this.state.showDeveloper) {
            return <div>
                <div className="contenttext">
                    <InformationComponent />
                </div>
                <FormComponent />
            </div>
        }
    }

    /**
     * handlers for anchor elements
     */
    pickDeveloper = () => {
        this.setState({ showDeveloper: true });
    }

    pickCompany = () => {
        this.setState({ showDeveloper: false });
    }

    /**
     * Renders the particleJs background and all the content 
     * from DeveloperComponent and CompanyComponent, respectively
     */
    render() {
        return (
            <div>
                <div className="particles">
                    <Particles
                        params={{
                            particles: {
                                line_linked: {
                                    enable: true,
                                    shadow: {
                                        enable: true,
                                        color: "#3CA9D1",
                                        blur: 3
                                    }
                                },
                                shape: {
                                    type: "polygon",
                                    polygon: {
                                        nb_sides: 8
                                    }
                                },
                                number: {
                                    value: 35,
                                    density: {
                                        enable: true,
                                        value_area: 1000
                                    }
                                },
                                color: {
                                    value: "random"
                                },
                                move: {
                                    enable: true,
                                    speed: 6,
                                    distance: 250,
                                    direction: "none",
                                    random: false,
                                    out_mode: "out"
                                },
                                size: {
                                    value: 5
                                }
                            },
                            interactivity: {
                                detect_on: "window",
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: ["repulse"]
                                    }
                                }
                            }
                        }}
                    />
                    <div className="knoppen pull-right">
                        <a className={!this.state.showDeveloper ? 'button pull-right buttonselected' : 'button pull-right'} onClick={this.pickCompany}><h3>Company</h3></a>
                        <a className={this.state.showDeveloper ? 'button pull-right buttonselected' : 'button pull-right'} onClick={this.pickDeveloper}><h3>Developer</h3></a>
                    </div>
                    <div className="jumbotron">
                        <div className="box">
                            <h1>Hi! it's Maggy from Magisco</h1>
                            {this.handleRendering()}
                        </div>
                    </div>
                </div>
                {this.handleAdditionalInfo()}
            </div>
        );
    }
}

export default ParticleComponent;
