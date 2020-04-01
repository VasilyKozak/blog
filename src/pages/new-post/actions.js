import API from 'src/api';
import { push } from 'connected-react-router';

export function changeDataAction(fieldId, value) {
  return {
    type: 'NEW_POST_DATA_CHANGE',
    payload: {
      fieldId,
      value
    }
  }
}

export function createPostAction(data) {
  return async function(dispatch) {
    try {
      await API.posts.createPost(data);
      dispatch({ type: 'NEW_POST_CREATE_SUCCESS' });
      dispatch(push('/'));
    } catch (error) {

    }
  }
}
