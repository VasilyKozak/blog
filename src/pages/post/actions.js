import API from 'src/api';
import {push} from "connected-react-router";

export const getPostDataAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'POST_PAGE_GET_DATA_REQUEST' });
      const response = await API.posts.getPostById(id);
      dispatch({ type: 'POST_PAGE_GET_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'POST_PAGE_GET_DATA_FAIL' });
    }
  }
};

export const increaseLikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_INCREASE_LIKE_REQUEST' });
      const response = await API.posts.increasePostLike(id);
      dispatch({ type: 'MAIN_PAGE_INCREASE_LIKE_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'MAIN_PAGE_INCREASE_LIKE_FAIL' });
    }
  }
};

export const increaseDislikeCountAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_INCREASE_DISLIKE_REQUEST' });
      const response = await API.posts.increasePostDislike(id);
      dispatch({ type: 'MAIN_PAGE_INCREASE_DISLIKE_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'MAIN_PAGE_INCREASE_DISLIKE_FAIL' });
    }
  }
};

export const deletePostAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'GET_DELETE_POST_REQUEST' });
      const response = await API.posts.deletePost(id);
      dispatch({ type: 'GET_DELETE_POST_LIKE_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'GET_DELETE_POST_LIKE_FAIL' });
    }
  }
};

export const changePostAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'GET_CHANGE_POST_REQUEST' });
      const response = await API.posts.changePost(id);
      dispatch({ type: 'GET_CHANGE_POST_SUCCESS', payload: response.data });
      dispatch(push('/'));
    } catch(error) {
      dispatch({ type: 'GET_CHANGE_POST_FAIL' });
    }
  }
};
