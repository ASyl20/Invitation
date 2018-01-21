import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCXdwZOif3AyN3qJN2mmlwzdfsEktOoezE",
    authDomain: "invitations-c5338.firebaseapp.com",
    databaseURL: "https://invitations-c5338.firebaseio.com",
    projectId: "invitations-c5338",
    storageBucket: "invitations-c5338.appspot.com",
    messagingSenderId: "376809080108"
}

const app  = firebase.initializeApp(config)



ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
