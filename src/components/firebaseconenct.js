
import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBozcOn_FQWLhXJ0O6TvbzGQlMBAi215UU",
    authDomain: "note-management-react.firebaseapp.com",
    databaseURL: "https://note-management-react.firebaseio.com",
    projectId: "note-management-react",
    storageBucket: "note-management-react.appspot.com",
    messagingSenderId: "672750013098",
    appId: "1:672750013098:web:ac95f6220b899a09e0ded3",
    measurementId: "G-68MQFVNQKS"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();
 export const firebaseconenct = firebase.initializeApp(firebaseConfig);

// var datafb = firebase.database().ref('dataForNote/note1');
// datafb.set({
//     id: 1,
//     contentnote: "1111",
//     titlenote: "qqq"
// })
//   datafb.once('value').then(function(snapshot){
//     console.log(snapshot.val());
//   });