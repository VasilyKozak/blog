import API from 'src/api';
import {push} from "connected-react-router";

export const getMyPageDataAction = (id) => {
    return async function(dispatch) {
        try {
            dispatch({ type: 'USER_PAGE_GET_DATA_REQUEST' });
            const response = await API.user.getUserPage(id);
            dispatch({ type: 'USER_PAGE_GET_DATA_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'USER_PAGE_GET_DATA_FAIL' });
        }
    }
};

export const showModalAction = () => {
    return async function(dispatch) {
        try {
            dispatch({ type: 'SHOW_MODAL' });
        } catch (error) {
            dispatch({ type: 'SHOW_MODAL_FAIL' });
        }
    }
};

export const hideModalAction = () => {
    return async function(dispatch) {
        try {
            dispatch({ type: 'HIDE_MODAL' });
        } catch (error) {
            dispatch({ type: 'HIDE_MODAL_FAIL' });
        }
    }
};

export const changeFieldAction = ({ fieldId, value }) => ({
    type: 'CHECK_PASSWORD_DATA_FORM',
    payload: { fieldId, value }
});

export const checkPasswordAction = (dataForm) => {
    return async function(dispatch) {
        try {
            dispatch({ type: 'CHANGE_PASSWORD_GET_DATA_REQUEST'});
            const response = await API.user.getChangePassword(dataForm);

            if (response.data.error)
            {
                dispatch({ type: 'CHANGE_PASSWORD_GET_DATA_BAD_REQUEST', payload: response.data })
            } else
            {
                dispatch({ type: 'CHANGE_PASSWORD_GET_DATA_SUCCESS', payload: response.data });
                await API.user.signOut();
                const actionPush = document.location.replace("/sign-in");
                dispatch(actionPush);
            }


        } catch (error) {
            dispatch({ type: 'CHANGE_PASSWORD_GET_DATA_FAIL', payload: error.response.data });
        }
    }
};



