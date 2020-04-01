import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from 'src/components/input';
import Textarea from 'src/components/textarea';
import Button from 'src/components/button';
import * as Actions from './actions';
import s from './style.css';

class NewPost extends Component {
  onChangeData = (data) => {
    const fieldId = data.fieldId;
    const value = data.value;

    this.props.changeDataAction(fieldId, value);
  };

  onSubmit = () => {
    this.props.createPostAction(this.props.data);
  };

  render() {
    const { data } = this.props;

    return (
      <div className={s.postFormWrapper}>
        <div className={s.row}>
          <div>Заголовок</div>
          <Input
            id="title"
            value={data.title}
            onChange={this.onChangeData}
          />
        </div>
        <div className={s.row}>
          <div>Контент</div>
          <Textarea
            id="content"
            value={data.content}
            onChange={this.onChangeData}
          />
        </div>
        <div className={s.row}>
          <Button id="submit" onClick={this.onSubmit}>Создать</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.newPost.data
  };
}

export default connect(mapStateToProps, Actions)(NewPost);
