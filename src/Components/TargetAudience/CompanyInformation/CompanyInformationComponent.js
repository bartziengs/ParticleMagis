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
                    <h3 className="row text-center partner-text">Partners</h3>
                    <div className="row">
                        <Slider {...this.props}>
                            <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                                <img alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/frontmen.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                                <img alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/Magisco logo-3/PNG/logo-transparent.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                                <img alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/logo-srxp.png')}></img>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                                <img alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/UvA.png')}></img>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-xs-12 text-center">
                                <img alt="magisco-logo" className="img img-responsive partner-logos" src={require('../../../images/condept.jpeg')}></img>
                            </div>                          
                        </Slider>                                               
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
}

export default CompanyInformationComponent;
