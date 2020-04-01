import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <ul className={style.wrapperUl}>
          <li><Link className={style.link} to="/">Главная</Link></li>
          <li><Link className={style.link} to="/about">О сайте</Link></li>
          {this.props.user && <li><Link className={style.link} to="/new-post">Новый пост</Link></li>}
        </ul>

        {!this.props.user
          ?
          <ul className={style.wrapperUl}>
            <li><Link className={style.link} to="/sign-up">Регистрация</Link></li>
            <li><Link className={style.link} to="/sign-in">Логин</Link></li>
          </ul>
          :
          <ul className={style.wrapperUl}>
            <li className={style.link}>Привет: {this.props.user.login}</li>
            <li className={style.link} onClick={this.props.signOut}>Выход</li>
          </ul>
        }
      </div>
    )
  }
}
