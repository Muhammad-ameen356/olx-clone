import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAPzHIizxqMjLgueg1Et-Th60f7GwPyJ38",
  authDomain: "ameen-olx.firebaseapp.com",
  projectId: "ameen-olx",
  storageBucket: "ameen-olx.appspot.com",
  messagingSenderId: "82663758470",
  appId: "1:82663758470:web:dbbb12ec31396de03bcf07",
  measurementId: "G-T5G3GB5ET2"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
