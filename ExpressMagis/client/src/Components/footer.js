import React, { Component } from 'react';
import Modal from 'react-modal';
import { modalResources } from '../Resources/modal-resources';

/**
 * @author Bart Ziengs 3-01-2017
 * Footer component for the entire website
 */

class FooterComponent extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            showPrivacy: false,
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    showPrivacy = () => {
        this.setState({
            showPrivacy: true,
        })
        this.openModal();
    }

    showTerms = () => {
        this.setState({
            showPrivacy: false
        })
        this.openModal();
    }

    render = () => {
        return (
            <footer class="footer">
                <div class="container footer">
                    <div class="footermodal">
                        <p className="col-xs-4 text-center"><span onClick={this.showPrivacy}>Privacy Policy</span></p>
                        <p className="col-xs-4 text-center"><span onClick={this.showTerms}>Terms of Service</span></p>
                        <p className="col-xs-4 text-center">Chamber of Commerce 68904657</p>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            style={modalResources.customStyles}
                            onRequestClose={this.closeModal}
                            contentLabel="footerModalPrivacyEnServices"
                        >
                            <i class="fa fa-times pull-right" onClick={this.closeModal}></i>
                            <div dangerouslySetInnerHTML={this.state.showPrivacy ? { __html: modalResources.privacyPolicy } : { __html: modalResources.termsOfService }}></div>
                        </Modal>
                    </div>
                </div>
            </footer>
        )
    };

}

export default FooterComponent;