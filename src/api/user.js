import axiosFetch from './axios';

export function signIn(data) {
  return axiosFetch({
    url: 'users/signin',
    method: 'POST',
    data: data
  });
}

export function signUp(data) {
  return axiosFetch({
    url: 'users/signup',
    method: 'POST',
    data: data
  });
}

export function auth() {
  return axiosFetch({
    url: 'users/auth/',
    method: 'GET'
  });
}

export function signOut() {
  return axiosFetch({
    url: 'users/signout/',
    method: 'GET'
  });
}

export function checkLogin(login) {
  return axiosFetch({
    url: 'users/check-exists/',
    method: 'POST',
    data: {
      login: login
    }
  });
}

export function getUserPage(id) {
  return axiosFetch({
    url: `/users/${id}`,
    method: 'GET'
  });
}

export function getChangePassword(data) {
  return axiosFetch({
    url: 'users/change/password/',
    method: 'PUT',
    data
  });
}