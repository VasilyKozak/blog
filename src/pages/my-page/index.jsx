import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'src/components/button';
import * as Actions from './actions';
import Modal from 'src/components/modal'
import style from './style.css';


class MyPage extends Component {

    componentShowModal = () => {
        this.props.showModalAction();
    }
    componentHideModal = () => {
        this.props.hideModalAction();
    }

    componentDidMount() {
        const { match } = this.props;
        this.props.getMyPageDataAction(match.params.id);
    }

    render() {
        const { data, isShowModal } = this.props;
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
                            isShowModal &&  <Modal closeModal={this.componentHideModal} />
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
        isShowModal: state.myPage.isShowModal
    };
}

export default connect(mapStateToProps, Actions)(MyPage)