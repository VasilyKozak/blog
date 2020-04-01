import React, {Component} from 'react';
import { createPortal } from 'react-dom';
import Modal from './modal';

class ModalWrapper extends Component {
  element = null;

  constructor(props) {
    super(props);

    this.element = document.createElement('div');
    document.body.append(this.element);
  }

  componentWillUnmount() {
    this.element.remove();
  }

  render() {
    return (
      createPortal(
        <Modal {...this.props}/>,
        this.element
      )
    );
  }
}

export default ModalWrapper;