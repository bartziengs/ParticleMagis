import React, { Component } from 'react';
import Particles from '../../node_modules/react-particles-js/lib/particles';
import DeveloperComponent from './developer'; 
import CompanyComponent from './company';
import FormComponent from './form';

class ParticleComponent extends Component {

  constructor(props){
      super(props);
        this.state = {
            showDeveloper: true,
        }

        this.pickDeveloper = this.pickDeveloper.bind(this);
        this.pickCompany = this.pickCompany.bind(this);
  }

  handleRendering= () => {
      if(this.state.showDeveloper){
        return <div 
            className="developerUSP">
                <DeveloperComponent/>
            </div>
      }else{
          return <div 
            className="CompanyUSP">
                <CompanyComponent/>
            </div>
      }
  }
  
  pickDeveloper = () => {
        this.setState({ showDeveloper: true});
  }

  pickCompany = () => {
    this.setState({ showDeveloper: false});
  }


  render() {
    return (
        <div className="particles">
            <Particles 
            params={{
                        particles: {
                            line_linked: {
                                enable: true,
                                shadow: {
                                    enable: true,
                                    color: "#3CA9D1",
                                    blur: 5
                                }
                            },
                            shape:{
                                type: "polygon",
                                polygon: {
                                    nb_slides: 4
                                }
                            }, 
                            number: {
                                value: 60,
                                // density:{
                                //     enable: true,
                                //     value_area: 5
                                // }
                            },
                            color: {
                                value: "random"
                            },
                            move: {
                                enable:true,
                                speed: 2,
                                distance: 250,
                                direction: "none",
                                random: false,
                                out_mode: "out"
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
                    <a className={!this.state.showDeveloper ? 'button pull-right buttonselected' : 'button pull-right'}  onClick={this.pickCompany}>Company</a>
                    <a className={this.state.showDeveloper ? 'button pull-right buttonselected' : 'button pull-right'} onClick={this.pickDeveloper}>Developer</a>
                </div> 
            <div className="jumbotron">
                <div className="box">
                 <h2>Hi! it's Maggy from Magisco</h2>
                {this.handleRendering()}
            </div>
            </div>
            </div>
    );
  }
}

export default ParticleComponent;
