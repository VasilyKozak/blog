import cloneDeep from 'lodash/cloneDeep';

const initState = {
    data: null,
    isShowModal: false,
    dataForm: {
        currentPassword: '',
        newPassword: ''
    },
    errors: {
        currentPassword: '',
        newPassword: ''
    }
};

function merge(state, someObject) {
    const clonnedState = cloneDeep(state);

    return Object.assign(clonnedState, someObject);
}

function mapErrorFromServer(errorFromServer) {
    const errorCode = Object.keys(errorFromServer)[0];

    switch (errorCode) {
        case 'Unauthorized':
            return 'Авторизуйтесь';
        case 'isRequired':
            return 'Поле обязательно для заполнения!';
        case 'minLength':
            return 'Минимальная длина пароля 3 символа';
        case 'error':
            return 'Новый и текущий пароль совпадают!';
        default:
            return errorCode;
    }
}

function getFormErrors(payload) {
    const errorKeys = Object.keys(payload);
    const errors = errorKeys.reduce(function(result, errorKey) {
        const errorFromServer = payload[errorKey];
        result[errorKey] = mapErrorFromServer(errorFromServer);
        return result;
    }, {});

    return errors;
}

export default function myPageReducer(state = initState, action) {
    switch (action.type) {
        case 'USER_PAGE_GET_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload
            };
        case 'SHOW_MODAL':
            return {
                ...state,
                isShowModal: !action.isShowModal
            };
        case 'HIDE_MODAL':
            return {
                ...state,
                isShowModal: false
            };
        case 'CHANGE_PASSWORD_GET_DATA_FAIL':
            return {
                ...state,
                errors: getFormErrors(action.payload)
            };
        case 'CHECK_PASSWORD_DATA_FORM':
            return merge(state, {
                dataForm: {
                    ...state.dataForm,
                    [action.payload.fieldId]: action.payload.value
                }
            });
        default:
            return state;
    }
}
