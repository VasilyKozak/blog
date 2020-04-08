import API from 'src/api';

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
