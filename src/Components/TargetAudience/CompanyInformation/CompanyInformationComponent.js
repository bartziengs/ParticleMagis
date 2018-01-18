import React, { Component } from 'react';
import Slider from 'react-slick';
import './CompanyInformationComponent.css';

/**
 * @author Bart Ziengs 1-12
 * DeveloperComponent for rendering information and steps
 */

class CompanyInformationComponent extends Component {
    render() {
        return (
            <section id="info">
                <div className="jumbotron slider-container">
                    <div className="partner-text">Partners</div>
                    <div className="row">
                        <Slider {...this.props} className="magisco-slider">
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/frontmen.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <img  height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/Magisco logo-3/PNG/logo-transparent.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/logo-srxp.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/UvA.png')}></img>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/frontmen.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/uwardrobe.png')}></img>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/rauweboon.png')}></img>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/condept.jpeg')}></img>
                            </div>                                                      
                        </Slider>
                        {/* <div className="col-lg-3 col-md-6 col-xs-12">
                            <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/frontmen.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/logo-srxp.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/UvA.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/uwardrobe.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/rauweboon.png')}></img>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <img height="120" width="120" alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/condept.jpeg')}></img>
                        </div>*/}
                    </div>                                       
                </div>
            </section >
        );
    }
}

CompanyInformationComponent.defaultProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 1000,
    infinite: true,
    arrows: false,
    adaptiveHeight:true,
}

export default CompanyInformationComponent;
