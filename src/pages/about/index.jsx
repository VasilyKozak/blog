import React, { Component } from 'react';
import style from './style.css';

export default class About extends Component {
    render() {
        return (
            <div className={style.aboutWrapper}>
                <div className={style.aboutTitle}>
                    Out story
                </div>
                <hr/>
                <div className={style.aboutContext}>
                    Подбор цвета и шрифта является одним из самых сложных этапов создания логотипа, однако среди огромного разнообразия возможных сочетаний выбрать наиболее оптимальные очень сложно.<br/><br/>
                    Выберите свою отрасль и укажите характеристики своей компании. Наш сервис предложит вам лучшие цветовые решения и шрифты для вашего бизнеса. Используя оптимальные цвета и шрифты, вы можете создать свой логотип самостоятельно или обратиться к профессиональному дизайнеру.
                </div>
            </div>
        )
    }
}
