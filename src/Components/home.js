import React, { Component } from 'react';
import DeveloperComponent from './developer';
import CompanyComponent from './company';
import FormComponent from './form';
import InformationComponent from './information';
import ParticleComponent from './particle';
import StepsComponent from './steps';
import contact from '../Pug/contact.pug';

/**
 * @author Bart Ziengs, 1-12-17
 * This is the main component, rendering the particle background and 
 * if applicable other infromation and procedures
 */

class HomeComponent extends Component {

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
                <div>
                    <StepsComponent />
                </div>
                <div>
                    <FormComponent />
                </div>
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
                    <ParticleComponent />
                    <div className="knoppen pull-right">
                        <a className={!this.state.showDeveloper ? 'button pull-right buttonselected' : 'button pull-right'} onClick={this.pickCompany}><h3>Company</h3></a>
                        <a className={this.state.showDeveloper ? 'button pull-right buttonselected' : 'button pull-right'} onClick={this.pickDeveloper}><h3>Developer</h3></a>
                    </div>
                    <div className="jumbotron">
                        <div className="box">
                            <h1>Hi! it's Maggy from Magisco!</h1>
                            {this.handleRendering()}
                        </div>
                    </div>
                </div>
                {this.handleAdditionalInfo()}
            </div>
        );
    }
}

export default HomeComponent;
