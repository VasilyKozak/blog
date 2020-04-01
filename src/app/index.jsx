import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/header';
import MainPage from 'src/pages/main';
import SignIn from 'src/pages/sing-in';
import TestPage from 'src/pages/test-page';
import SignUp from 'src/pages/sign-up'
import Post from 'src/pages/post';
import NewPost from 'src/pages/new-post';
import * as Actions from './actions';
import './style.css';

class App extends Component {
  componentDidMount() {
    this.props.auth();
  }

  render() {
    return (
      <>
        <Header user={this.props.user} signOut={this.props.signOut} />
        <Switch>
          <Route path='/test-page' exact={true} component={TestPage} />
          <Route path='/sign-in' exact={true} component={SignIn} />
          <Route path='/sign-up' exact={true} component={SignUp} />
          {this.props.user && <Route path='/new-post' exact={true} component={NewPost} />}
          <Route path='/about' exact={true} render={() => <h1>About</h1>} />
          <Route path='/post/:id' exact={true} component={Post} />
          <Route path='/' exact={true} component={MainPage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.applicationReducer.user
  });
};

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     dispatch: dispatch,
//     increaseAction: (payload) => {
//       dispatch(Actions.increaseAction(payload));
//     },
//     decreaseAction: (payload) => {
//       dispatch(Actions.decreaseAction(payload));
//     }
//   });
// };

export default connect(mapStateToProps, Actions)(App);
