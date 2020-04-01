const initState = {
  user: null
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-IN_SUCCESS':
    case 'SIGN_UP_SUCCESS':
    case 'APPLICATION-AUTH':
      return {
        ...state,
        user: action.payload
      };
    case 'APPLICATION-SIGN-OUT':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
