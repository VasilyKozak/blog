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

  render() {
    const { data } = this.props;
    return (
      <div>
        {data
          ? <div className={style.postWrapper}>
              <div className={style.postTitle}>{data.title}</div>
              <hr/>
              <div className={style.postContent}>{data.content}</div>
              <hr/>
              <div className={style.footer}>
                <div className={style.leftCol}>
                  <div id={data.id} onClick={this.onClickLike} className={style.like}><img alt={'like'} src={'../src/components/image/like.png'}/>{data.likesCount}</div>
                  <div id={data.id} onClick={this.onClickDislike} className={style.dislike}><img alt={'dislike'} src={'../src/components/image/dislike.png'}/> {data.dislikesCount}</div>
                </div>
                <div className={style.viewWrapper}><img alt={'eye'} src={'../src/components/image/eye.svg'}/>{data.viewsCount}<div className={style.eye}/></div>
              </div>
              <div className={style.buttonWrapper}>
                <Button id="submit" onClick={this.onSubmit}>Удалить пост</Button>
                <Button id="submit" onClick={this.onSubmit}>Изменить пост</Button>
              </div>
            </div>
          : <div>loading...</div>
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
