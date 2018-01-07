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
                    <div className="row infotext">
                        Hier komt ook wat company informatie
                    </div>
                    <div className="row infotext">
                        Hier komt wat company informatie
                    </div>
                </div>
            </section >
        );
    }
}

export default DeveloperInformationComponent;
