import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalContext, { ModalContextModel } from '../contexts/modalContext';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    bottom: 'auto',
    left: '50%',
    width: '282px',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

/**
 * Represents an application that has a modal. Modal shown by children
 * components using ModalContext
 */
class ModalizedApplication extends Component {
  state = {
    modalChildren: null,
    showModal: false
  }

  componentDidMount() {
    Modal.setAppElement(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount() {
    Modal.setAppElement(null);
  }

  handleShowModal(children) {
    this.setState({
      modalChildren: children,
      showModal: true
    })
  }

  closeModal() {
    this.setState({showModal: false});
  }

  render() {
    return (
      <>
        <ModalContext.Provider value={new ModalContextModel(this.handleShowModal.bind(this))}>
          {this.props.children}
        </ModalContext.Provider>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal.bind(this)}
          style={modalStyle}>
          {this.state.modalChildren}
        </Modal>
      </>
    );
  }
}

export default ModalizedApplication;

