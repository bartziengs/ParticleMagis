import React, { Component } from 'react'
import './PartnerComponent.css';

export default class PartnerComponent extends Component {
    render() {
        return (
            <div className="container ">
            <h2>A selection of our partners that we enjoy working with:</h2>
                <div className="row">
                    <div class="column">
                        <img alt="chickie" className="img img-responsive" src={require('../../images/partners/png/1_ace.png')}></img>
                        <img alt="chickie" className="img img-responsive" src={require('../../images/partners/png/2_condept.png')}></img>
                    </div>
                    <div class="column">
                        <img alt="chickie" className="img img-responsive" src={require('../../images/partners/png/3_frontmen.png')}></img>
                        <img alt="chickie" className="img img-responsive" src={require('../../images/partners/png/4_jalt.png')}></img>
                    </div>
                    <div class="column">
                        <img alt="chickie" className="img img-responsive" src={require('../../images/partners/png/5_mywheels.png')}></img>
                        <img alt="chickie" className="img img-responsive" src={require('../../images/partners/png/6_rauweboon.png')}></img>
                    </div>
                    <div class="column">
                        <img alt="chickie" className="img img-responsive" src={require('../../images/partners/png/7_srxp.png')}></img>
                        <img alt="chickie" className="img img-responsive" src={require('../../images/partners/png/8_uva.png')}></img>
                    </div>
                </div>
                <div className="flexcontainer">
                    <img alt="chickie" src={require('../../images/partners/png/9_uw.png')}></img>
                    {/* <h3>Boodschap!</h3> */}
                </div>

            </div>
        )
    }
}
