import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import style from './style.css';
import Button from "src/components/button";

class PostPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getPostDataAction(match.params.id);
  }
  onClickLike = (evt) => {
    const { id } = evt.target;
    this.props.increaseLikeCountAction(id);
  };
  onClickDislike = (evt) => {
    const { id } = evt.target;
    this.props.increaseDislikeCountAction(id);
  };
  onSubmitDeletePost = () => {
    const { data } = this.props;
    this.props.deletePostAction(data.id);
  };
  onSubmitChangePost = () => {
    const { data } = this.props;
    this.props.changePostAction(data.id);
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        {data
          ? <div className={style.postWrapper}>
              <div className={style.postTitle}>{data.title}</div>
              <hr/>
              <div className={style.authorInfo}>
                <img className={style.authorAvatar} src={'http://school-blog.ru/images/' + data.author.avatar} alt={'avatar'}/>
                <div className={style.authorPublishDate}>
                  {'Опубликовал (а): ' + data.author.firstName + ' ' + data.author.lastName}<br/>
                  {new Date(data.date).toLocaleDateString()}
                </div>
              </div>
              <div className={style.postContent}>{data.content}</div>
              <hr/>
              <div className={style.footer}>
                <div className={style.leftCol}>
                  <div className={style.leftCol}><img className={style.imgLike} id={data.id} onClick={this.onClickLike} alt={'like'} src={'../src/components/image/like.png'}/>{data.likesCount}</div>
                  <div className={style.leftCol}><img className={style.imgDislike} id={data.id} onClick={this.onClickDislike} alt={'dislike'} src={'../src/components/image/dislike.png'}/>{data.dislikesCount}</div>
                </div>
                <div className={style.leftCol}><img className={style.viewWrapper} alt={'eye'} src={'../src/components/image/eye.svg'}/>{data.viewsCount}</div>
              </div>
              <div className={style.buttonWrapper}>
                <Button id="submit" onClick={this.onSubmitDeletePost}>Удалить пост</Button>
                <Button id="submit" onClick={this.onSubmitChangePost}>Изменить пост</Button>
              </div>
            </div>
          : <div className={style.ldsEllipsis}>
              <div/>
              <div/>
              <div/>
              <div/>
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.post.data
  };
}

export default connect(mapStateToProps, Actions)(PostPage);
