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
            modalIsOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    afterOpenModal = () => {
        this.subtitle.style.color = '#f00';
      }

    render = () => {
        return (
            <footer class="footer">
                <div class="container">
                    <div class="footermodal">
                        <button onClick={this.openModal}>Open Modal</button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            style={modalResources.customStyles}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal"
                        >

                            {/* <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
                            {/* <button onClick={this.closeModal}>close</button> */}
                            <i class="fa fa-times" onClick={this.closeModal}></i>
                            <div dangerouslySetInnerHTML={{__html : modalResources.privacyPolicy}}></div>
                        </Modal>
                    </div>
                </div>
            </footer>
        )
    };

}

export default FooterComponent;