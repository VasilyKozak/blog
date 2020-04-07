import React, {Component} from 'react';
import { createPortal } from 'react-dom';

class ModalWrapper extends Component {
  element = null;

  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
  }

  render() {
    return (
        createPortal(this.props.children, this.element)
    );
  }
}

export default ModalWrapper;
