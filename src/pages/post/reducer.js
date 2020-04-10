const initState = {
  posts: [],
  data: null
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case 'POST_PAGE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'MAIN_PAGE_INCREASE_LIKE_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'MAIN_PAGE_INCREASE_DISLIKE_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'GET_DELETE_POST_LIKE_SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
