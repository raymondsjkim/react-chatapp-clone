import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyCYd_apB__h4Nplyi79WxA3Ubvvx5plo-g",
    authDomain: "react-slack-clone-f016a.firebaseapp.com",
    databaseURL: "https://react-slack-clone-f016a.firebaseio.com",
    projectId: "react-slack-clone-f016a",
    storageBucket: "react-slack-clone-f016a.appspot.com",
    messagingSenderId: "694028062418"
  };
  firebase.initializeApp(config);

  export default firebase;