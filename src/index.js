import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9_pr4FmsNnGDk48SSjFgn9L71fIe8jkk",
  authDomain: "cart-6ccfc.firebaseapp.com",
  projectId: "cart-6ccfc",
  storageBucket: "cart-6ccfc.appspot.com",
  messagingSenderId: "564125459688",
  appId: "1:564125459688:web:7032b7f2a205b4d846555d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

