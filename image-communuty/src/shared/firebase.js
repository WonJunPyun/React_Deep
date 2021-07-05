import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBj6aGA0absz_Lfml2btdYrgOqhyuqLqZQ",
  authDomain: "image-community-f85f9.firebaseapp.com",
  projectId: "image-community-f85f9",
  storageBucket: "image-community-f85f9.appspot.com",
  messagingSenderId: "278919121307",
  appId: "1:278919121307:web:d3d8dd0ff6d6c4b3bc793e",
  measurementId: "G-EX9SQ21HSQ"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};