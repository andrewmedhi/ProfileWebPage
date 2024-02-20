// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBysPatkG99iS1-7Od01m5wBu3JNSywK4o",
  authDomain: "profile-app-6de89.firebaseapp.com",
  databaseURL: "https://profile-app-6de89-default-rtdb.firebaseio.com",
  projectId: "profile-app-6de89",
  storageBucket: "profile-app-6de89.appspot.com",
  messagingSenderId: "43066727896",
  appId: "1:43066727896:web:fa1eb2ba585e528e9c66ad",
  measurementId: "G-EZKP9KZPVN"
};

initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Fetch the user data from the database
database.ref('/').once('value').then(function(snapshot) {
  var users = snapshot.val();
  console.log(users);
  var usersDiv = document.getElementById('users');
  for (var userId in users) {
      var user = users[userId];
      var div = document.createElement('div');
      div.textContent = JSON.stringify(user);
      usersDiv.appendChild(div);
  }
});