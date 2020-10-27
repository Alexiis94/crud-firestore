import firebase from 'firebase/app';
import  'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCPO3gaOossns3GXV6QOjwPy75bbskKG7A",
    authDomain: "crud-react-2f5c1.firebaseapp.com",
    databaseURL: "https://crud-react-2f5c1.firebaseio.com",
    projectId: "crud-react-2f5c1",
    storageBucket: "crud-react-2f5c1.appspot.com",
    messagingSenderId: "182008787463",
    appId: "1:182008787463:web:158386364160705b27b0a2",
    measurementId: "G-BDJQM93KZQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}
  