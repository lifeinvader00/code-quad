import firebase, { googleAuthProvider } from "../firebase/firebase";

export const logIn = (user = {}) => ({
  type: "LOG_IN",
  payload: {
    user
  }
});

export const logOut = () => ({
  type: "LOG_OUT",
  payload: {
    user: {}
  }
});

// Thunks
export const start__logIn = () => {
  return dispatch => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(authData => dispatch(logIn(authData.user)));
  };
};

export const start__logOut = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch(logOut()));
  };
};
