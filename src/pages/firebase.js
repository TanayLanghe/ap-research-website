import firebase from 'firebase';
  
const firebaseConfig = {

    apiKey: "AIzaSyByKjHXXGqgObWFASqJ666mceSC7kr8kcY",
    authDomain: "ap-research-b305a.firebaseapp.com",
    projectId: "ap-research-b305a",
    storageBucket: "ap-research-b305a.appspot.com",
    messagingSenderId: "823708654847",
    appId: "1:823708654847:web:c8ca81d12c3360f07640ca",
    measurementId: "G-WTDK21EN79"
  
  // Initialize Firebases
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;