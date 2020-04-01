import React, {Component} from 'react';
import style from './style.css';

class Modal extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.modal}>
          <div>
            {
              this.props.content
            }
          </div>
          <button onClick={this.props.closeModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;