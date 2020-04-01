import API from 'src/api';

export const getInitPostsAction = () => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_INIT_GET_POSTS_REQUEST' });
      const response = await API.posts.getList({ offsetStep: 10 });
      dispatch({ type: 'MAIN_PAGE_INIT_GET_POSTS_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'MAIN_PAGE_INIT_GET_POSTS_FAIL' });
    }
  }
};

export const getScrollPostsAction = (NPosts) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_REQUEST' });
      const response = await API.posts.getList({ offset: NPosts, offsetStep: 1 });
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_SUCCESS', payload: response.data })
    } catch(error) {
      dispatch({ type: 'MAIN_PAGE_SCROLL_GET_POSTS_FAIL' });
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