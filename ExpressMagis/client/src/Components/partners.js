import React, { Component } from 'react';
import Slider from 'react-slick';

class PartnerComponent extends Component {

    render() {
        const settings = {
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            variableWidth: true,
            infinite: true,
            autoplaySpeed: 5000
        };
        const stijl = {
            textAlign: "center",
            width: 240,
        }
        return (
            <div>
                <Slider {...settings}>
                    <div style={stijl}><img src={require('../images/partners/Ace.png')} height="120" width="120"/></div>
                    <div style={stijl}><img src={require('../images/partners/condept.jpeg')} height="120" width="120" /></div>
                    <div style={stijl}><img src={require('../images/partners/frontmen.png')} height="120" width="120" /></div>
                    <div style={stijl}><img src={require('../images/partners/jalt.png')} height="120" width="120" /></div>
                    <div style={stijl}><img src={require('../images/partners/mywheels.png')} height="120" width="120" /></div>
                    <div style={stijl}><img src={require('../images/partners/rauweboon.jpg')} height="120" width="120" /></div>
                    <div style={stijl}><img src={require('../images/partners/srxp.png')} height="120" width="120" /></div>
                    <div style={stijl}><img src={require('../images/partners/UvA.png')} height="120" width="120" /></div>
                    <div style={stijl}><img src={require('../images/partners/uward.jpg')} height="120" width="120" /></div>
                </Slider>
            </div>
        );
    }
}

export default PartnerComponent;