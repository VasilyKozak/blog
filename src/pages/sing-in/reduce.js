import cloneDeep from 'lodash/cloneDeep';

const initState = {
  dataForm: {
    login: '',
    password: ''
  }
};

function merge(state, someObject) {
  const clonnedState = cloneDeep(state);

  return Object.assign(clonnedState, someObject);
}

export default function signInReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-IN_CHANGE_DATA_FORM':
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
