import React, { Component } from 'react';
import DeveloperInformationComponent from './DeveloperInformation/DeveloperInformationComponent';
import CompanyInformationComponent from './CompanyInformation/CompanyInformationComponent';
import FormComponent from './FormComponent';
import StepsComponent from './StepsComponent';
import PartnerComponent from './PartnerComponent';
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
                            <DeveloperInformationComponent />
                        </div>
                        <div>
                            <StepsComponent />
                        </div>
                        <div>
                            <PartnerComponent />
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
