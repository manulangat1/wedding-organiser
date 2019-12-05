import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_Z2euqoWeNFz4wMBZgsRTLS1VgPmcgVo",
    authDomain: "weddings-977d3.firebaseapp.com",
    databaseURL: "https://weddings-977d3.firebaseio.com",
    projectId: "weddings-977d3",
    storageBucket: "weddings-977d3.appspot.com",
    messagingSenderId: "460996749714",
    appId: "1:460996749714:web:298ff39ae282d7a281f94b",
    measurementId: "G-FNZHVV4DXL"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;