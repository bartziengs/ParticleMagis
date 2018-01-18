import React, { Component } from 'react';
import ParticleComponent from './ParticleComponent';
import TargetAudienceComponent from '../TargetAudience/TargetAudienceComponent';
import FooterComponent from '../Footer/FooterComponent';
import Smoothscroll from '../../SmoothScroll';

/**
 * @author Bart Ziengs, 1-12-17
 * This is the main component, rendering the particle background and 
 * if applicable other infromation and procedures
 */

class HomeComponent extends Component {

    /*
    *Basic constructor with inhereted properties from component, state is used to keep 
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

    // /**
    //  * only renders the arrows when you can scroll
    //  * @returns {*}
    //  */
    handleArrows = () => {
        if(this.state.showDeveloper) {
            return (
                <div>
                    <div className="arrow arrow-first"></div>
                    <div className="arrow arrow-second"></div>
                </div>
            );
        } else return(<div></div>)
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
                        <div className="logo col-lg-2 col-xs-4 col-md-3 pull-left"><img alt="magisco-logo" className="img img-responsive" src={require('../../images/Magisco logo-3/PNG/logo-white-transparent.png')}></img></div>
                        <a className={!this.state.showDeveloper ? 'button pull-right buttonselected' : 'button pull-right'} onClick={this.pickCompany}><h3>Company</h3></a>
                        <a className={this.state.showDeveloper ? 'button pull-right buttonselected' : 'button pull-right'} onClick={this.pickDeveloper}><h3>Developer</h3></a>
                    </div>
                    <div className="jumbotron">
                        <div className="box">
                            <h1>Hi! it's Maggy from Magisco</h1>
                            {(this.state.showDeveloper) 
                            ? 
                            <div className="DeveloperUSP">
                                <div className="container contenttext col-lg-8 col-lg-offset-2 text-center">
                                    <h3>Are you a junior-developer? Are you frustrated by recruiters? Let me take care of you!</h3>
                                    <a className="btn btn-lg formbutton-comp" onClick={() => {Smoothscroll.scrollTo("filmpie")}}>More Information</a>
                                    <a className="btn btn-lg formbutton-dev">Yes, I am Interested!</a>
                                </div>
                            </div>                              
                            :
                            <div className="CompanyUSP">
                                <div className="container contenttext col-lg-12 text-center">
                                    <h3>Are you from a company? Let Maggy care about you </h3>
                                    <h2>It will not take long before we are looking for companies who want to hire the best developers, untill then, stay tuned!</h2>
                                    <button className="btn btn-lg formbutton-comp">More Information</button>
                                    <button className="btn btn-lg formbutton-dev">Yes, I am Interested!</button>
                                </div>                                                     
                            </div>                
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="arrow arrow-first"></div>
                        <div className="arrow arrow-second"></div>
                    </div>  
                </div>
                <TargetAudienceComponent showDeveloper={this.state.showDeveloper}/>
                <FooterComponent/>
            </div>
        );
    }
}

export default HomeComponent;
