import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store, persistor } from './Redux/store';
import { PersistGate } from "redux-persist/integration/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIHKtsMNSyh-xW6OvvIITR3W_Iw9v3YyI",
  authDomain: "social-media-e041f.firebaseapp.com",
  projectId: "social-media-e041f",
  storageBucket: "social-media-e041f.appspot.com",
  messagingSenderId: "868463013713",
  appId: "1:868463013713:web:5ffc681c6782fd10756d70",
  measurementId: "G-68MKFWEVB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const domain="dev-eq6g6txe67zpm563.us.auth0.com";
const client_id="KrfMq5PFsKrqB8NjZOAz03EQwTnWoKc5";

console.log(domain + " " + client_id)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

        <App />
        </PersistGate>
        </Provider>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
