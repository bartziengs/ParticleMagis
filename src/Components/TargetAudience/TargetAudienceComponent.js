import React, { Component } from 'react';
import InformationComponent from './InformationComponent';
import FormComponent from './FormComponent';
import StepsComponent from './StepsComponent';
/**
 * @author Bart Ziengs 1-12
 * DeveloperComponent for rendering information and steps
 */

class TargetAudienceComponent extends Component {
    render() {
        return (
            <div>
                {(this.props.showDeveloper) 
                    ? 
                    <div>
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
                    :
                    <div></div>
                }
            </div>
        );
    }
}

export default TargetAudienceComponent;
