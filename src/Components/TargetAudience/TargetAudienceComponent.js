import React, { Component } from 'react';
import DeveloperInformationComponent from './DeveloperInformation/DeveloperInformationComponent';
import CompanyInformationComponent from './CompanyInformation/CompanyInformationComponent';
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
                        <div>
                            <StepsComponent />
                        </div>
                        <div className="contenttext">
                            <DeveloperInformationComponent />
                        </div>
                        <div>
                            <FormComponent />
                        </div>
                    </div>
                    :
                    <div>
                        <CompanyInformationComponent />
                    </div>
                }
            </div>
        );
    }
}

export default TargetAudienceComponent;
