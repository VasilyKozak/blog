import API from 'src/api';

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


