import API from 'src/api';

export const increaseAction = (payload = 1) => {
  return ({
    type: 'APPLICATION_INCREASE',
    payload: payload
  });
};

export const decreaseAction = payload => ({
  type: 'APPLICATION_DECREASE',
  payload
});

export const auth = () => {
  return async function(dispatch) {
    try {
      const response = await API.user.auth();

      dispatch({ type: 'APPLICATION-AUTH', payload: response.data })
    } catch (error) {

    }
  }
};

export const signOut = () => {
  return async function(dispatch) {
    try {
      const response = await API.user.signOut();
      dispatch({ type: 'APPLICATION-SIGN-OUT', payload: response.data })
    } catch (error) {

    }
  }
};

