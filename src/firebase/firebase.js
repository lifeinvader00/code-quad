import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA2MMp2yaXT8FVsSBGO565HZ8KdplD0h88",
  authDomain: "file-uploader-f0284.firebaseapp.com",
  databaseURL: "https://file-uploader-f0284.firebaseio.com",
  projectId: "file-uploader-f0284",
  storageBucket: "file-uploader-f0284.appspot.com",
  messagingSenderId: "238361055479"
};

firebase.initializeApp(config);

const db = firebase.database().ref("/");
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase as default, db, googleAuthProvider };
