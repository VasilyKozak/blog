import API from 'src/api';
import {push} from "connected-react-router";

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
      dispatch({ type: 'APPLICATION-SIGN-OUT', payload: response.data });
      dispatch(push('/'));
    } catch (error) {

    }
  }
};

