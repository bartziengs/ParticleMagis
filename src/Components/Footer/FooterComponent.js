import React, { Component } from 'react';
import Modal from 'react-modal';
import { modalResources } from '../Resources/modal-resources';
import './FooterComponent.css';

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
            <footer className="footer" id="foot">
                <div className="container footer footer-text">
                    <div className="footermodal">
                        <p className="col-xs-6 text-center footer-text"><span className="align-middle" onClick={this.showPrivacy}>Privacy Policy</span></p>
                        <p className="col-xs-6 text-center footer-text"><span onClick={this.showTerms}>Terms of Service</span></p>
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