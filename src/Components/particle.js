import React, { Component } from 'react';
import Particles from '../../node_modules/react-particles-js/lib/particles';


/**
 * @author Bart Ziengs, 1-12-17
 * Particle from particlesJS with settings custimizable in react syntax
 */

class ParticleComponent extends Component {

    /**
     * Renders the particleJs canvas-style (html property)
     * all available settings can be found on https://github.com/VincentGarreau/particles.js/
     */
    render() {
        return (
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
                                        nb_sides: 6
                                    }
                                },
                                number: {
                                    value: 35,
                                    density: {
                                        enable: true,
                                        value_area: 1500
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
                                    value: 7
                                }
                            },
                            interactivity: {
                                detect_on: "window",
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: ["repulse","push"]
                                    },
                                    onlick: {
                                        enable: true,
                                        mode: "push"
                                    }
                                }
                            }
                        }}
                    />
        );
    }
}

export default ParticleComponent;
