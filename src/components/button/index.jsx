import React, { Component } from 'react';
import style from './style.css';

export default class Button extends Component {
  onClick = () => {
    const { onClick, id } = this.props;

    onClick && onClick(id);
  };

  render() {
    return (
      <button className={style.button} onClick={this.onClick}>
        {this.props.children}
      </button>
    )
  }
}
