import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwJAZBrHYFiEj3QsSN34Wj6idQ0hu42ug",
  authDomain: "markety-38b85.firebaseapp.com",
  projectId: "markety-38b85",
  storageBucket: "markety-38b85.appspot.com",
  messagingSenderId: "879847653083",
  appId: "1:879847653083:web:f5d9974283f27b060756fe",
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp

const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
