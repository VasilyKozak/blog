import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sing-in/reduce';
import signUpReducer from 'src/pages/sign-up/reduce';
import mainReducer from 'src/pages/main/reducer';
import postReducer from 'src/pages/post/reducer';
import newPostReducer from 'src/pages/new-post/reducer';
import { history } from 'src/history';

const logger = createLogger({
  collapsed: true
});

const routerMiddle = routerMiddleware(history);

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  applicationReducer: applicationReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  main: mainReducer,
  post: postReducer,
  newPost: newPostReducer
});

// function myMiddleware(store) {
//   return function(next) {
//     return function(action) {
//       if (typeof action === 'function') {
//         action(store.dispatch, store.getState);
//       } else {
//         next(action);
//       }
//     }
//   }
// }

const store = createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddle, logger, thunk)
);

export default store;
