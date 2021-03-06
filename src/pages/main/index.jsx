import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions';
import style from './style.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.getInitPostsAction();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = (e) => {
    const { posts, isLoadingPosts } = this.props;
    const postsLength = posts.length;
    const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if(windowRelativeBottom <= document.documentElement.clientHeight + 100 && !isLoadingPosts) {
      this.props.getScrollPostsAction(postsLength)
    }
  };

  onClickLike = (evt) => {
    const { id } = evt.target;
    this.props.increaseLikeCountAction(id);
  };

  onClickDislike = (evt) => {
    const { id } = evt.target;
    this.props.increaseDislikeCountAction(id);
  };

  render() {
    const { posts } = this.props;

    return (
      <div className={style.postList}>
        {posts.map((postItem) => {

          return (
            <div className={style.postWrapper} key={postItem.id}>
              <div className={style.postTitle}>
                <Link className={style.linkTitle} to={`/post/${postItem.id}`}>{postItem.title}</Link>
                <hr/>
              </div>
              <div className={style.authorInfo}>
                <img className={style.authorAvatar} src={'http://school-blog.ru/images/' + postItem.author.avatar} alt={'avatar'}/>
                <div className={style.authorPublishDate}>
                  {'Опубликовал (а): ' + postItem.author.firstName + ' ' + postItem.author.lastName}<br/>
                  {new Date(postItem.date).toLocaleDateString()}
                </div>
              </div>
                <div className={style.postContent}>{postItem.content}</div>
                <hr/>
              <div className={style.footer}>
                <div className={style.leftCol}>
                  <div className={style.leftCol}><img className={style.imgLike} id={postItem.id} onClick={this.onClickLike} alt={'like'} src={'../src/components/image/like.png'}/>{postItem.likesCount}</div>
                  <div className={style.leftCol}><img className={style.imgDislike} id={postItem.id} onClick={this.onClickDislike} alt={'dislike'} src={'../src/components/image/dislike.png'}/>{postItem.dislikesCount}</div>
                </div>
                <div className={style.leftCol}><img className={style.viewWrapper} alt={'eye'} src={'../src/components/image/eye.svg'}/>{postItem.viewsCount}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.main.posts,
    isLoadingPosts: state.main.isLoadingPosts
  };
}

export default connect(mapStateToProps, Actions)(MainPage);
