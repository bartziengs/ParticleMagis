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
                <div>
                    <StepsComponent target={this.props.showDeveloper}/>
                </div>
                {(this.props.showDeveloper)
                    ?
                        <div className="contenttext">
                            <DeveloperInformationComponent />
                        </div>
                    :
                    <div>
                        <CompanyInformationComponent />
                    </div>
                }
                <div>
                    <PartnerComponent />
                    <FormComponent target={this.props.showDeveloper}/>
                </div>
            </div>
        );
    }
}

export default TargetAudienceComponent;
