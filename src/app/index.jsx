import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/header';
import MainPage from 'src/pages/main';
import SignIn from 'src/pages/sing-in';
import SignUp from 'src/pages/sign-up';
import Post from 'src/pages/post';
import NewPost from 'src/pages/new-post';
import MyPage from 'src/pages/my-page';
import About from 'src/pages/about';
import * as Actions from './actions';
import './style.css';

class App extends Component {
  componentDidMount() {
    this.props.auth()
  }

  render() {
    return (
      <>
        <Header user={this.props.user} signOut={this.props.signOut} />
        <Switch>
          <Route path='/sign-in' exact={true} component={SignIn} />
          <Route path='/sign-up' exact={true} component={SignUp} />
          {this.props.user && <Route path='/new-post' exact={true} component={NewPost} />}
          <Route path='/about' exact={true} component={About} />
          <Route path='/post/:id' exact={true} component={Post} />
          {this.props.user && <Route path='/user/:id' exact={true} component={MyPage} />}
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

export default connect(mapStateToProps, Actions)(App);
