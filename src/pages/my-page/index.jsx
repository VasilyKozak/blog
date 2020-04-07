import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'src/components/button';
import * as Actions from './actions';
import Modal from 'src/components/modal';
import style from 'src/pages/my-page/style.css';
import styleModal from 'src/components/modal/style.css';
import Input from 'src/components/input';
import PropTypes from "prop-types";


class MyPage extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
        checkPasswordAction: PropTypes.func.isRequired,
    };

    componentShowModal = () => {
        this.props.showModalAction();
    };
    componentHideModal = () => {
        this.props.hideModalAction();
    };
    onSubmit = () => {
        const { dataForm } = this.props;
        this.props.checkPasswordAction(dataForm);
    };
    componentDidMount() {
        const { match } = this.props;
        this.props.getMyPageDataAction(match.params.id);
    }

    render() {
        const { data, isShowModal, errors } = this.props;
        console.log(this.props)
        return (
            <div>
                {data
                    ? <div className={style.myPageContainer} key={data.id}>
                        <img ref='image' src={`/images/${data.avatar}`} className={style.avatarContainer}/>
                        <ul className={style.wrapperUl}>
                            <li>{`${data.firstName} ${data.lastName}`}</li>
                            <li>{`Имя: ${data.firstName}`}</li>
                            <li>{`Фамилия: ${data.lastName}`}</li>
                            <li>{`Дата регистрации: ${data.registrationDate}`}</li>
                            <li>{`E-mail: ${data.email}`}</li>
                            <li>{`Количество постов: ${data.postsCount}`}</li>
                            <li>{`Количество лайков: ${data.likesCount}`}</li>
                            <li>{`Количество дизлайков: ${data.dislikesCount}`}</li>
                        </ul>
                        <div className={style.row}>
                            <Button id="submit" onClick={this.componentShowModal}>Изменить пароль</Button>
                        </div>
                        {
                            isShowModal &&  <Modal>
                                <div className={styleModal.wrapper}>
                                    <div className={styleModal.modal}>
                                        <Button onClick={this.componentHideModal}>Close</Button>
                                        <div>
                                        <div>
                                            <div className={style.row}>
                                                <div>
                                                    <div>Текущий пароль</div>
                                                    <Input
                                                        id="currentPassword"
                                                        value={this.props.dataForm.currentPassword}
                                                        onChange={this.props.changeFieldAction}
                                                        error={errors.currentPassword}
                                                    />
                                                </div>
                                                <div>
                                                    <div>Новый пароль</div>
                                                    <Input
                                                        id="newPassword"
                                                        value={this.props.dataForm.newPassword}
                                                        onChange={this.props.changeFieldAction}
                                                        error={errors.newPassword}
                                                    />
                                                </div>
                                            </div>
                                            <div className={style.row}>
                                                <Button id="submit" onClick={this.onSubmit}>Изменить</Button>
                                            </div>
                                        </div>
                                        <Button onClick={this.componentHideModal}>Отмена</Button>
                                    </div>
                                    </div>
                                </div>
                            </Modal>
                        }
                    </div>
                    : <div>loading...</div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        data: state.myPage.data,
        isShowModal: state.myPage.isShowModal,
        dataForm: state.myPage.dataForm,
        errors: state.myPage.errors
    };
}

export default connect(mapStateToProps, Actions)(MyPage)
