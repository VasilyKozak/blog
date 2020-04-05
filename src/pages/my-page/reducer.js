const initState = {
    data: null,
    isShowModal: false
};

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

        default:
            return state;
    }
}
