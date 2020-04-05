import React, {Component} from 'react';
import style from 'src/components/modal/style.css';
import Input from "src/components/input";
import Button from "src/components/button";

class Modal extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.modal}>
          <div>
            {
                <div className={style.newPSWWrapper}>
                    <div className={style.row}>
                        <div>
                            <div>Текущий пароль</div>
                            <Input
                                id="currentPSW"
                            />
                        </div>
                        <div>
                            <div>Новый пароль</div>
                            <Input
                                id="newPSW"
                            />
                        </div>
                    </div>
                    <div className={style.row}>
                        <Button id="submit" onClick={this.onClick}>Изменить</Button>
                    </div>
                </div>
            }
          </div>
          <Button onClick={this.props.closeModal}>Close</Button>
        </div>
      </div>
    );
  }
}

export default Modal;