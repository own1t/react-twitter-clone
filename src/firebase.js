import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDExNHU9YHlo3LaiXd6ctn-eV-5RCwHmRE",
  authDomain: "twitter-clone-82918.firebaseapp.com",
  databaseURL: "https://twitter-clone-82918.firebaseio.com",
  projectId: "twitter-clone-82918",
  storageBucket: "twitter-clone-82918.appspot.com",
  messagingSenderId: "128402034752",
  appId: "1:128402034752:web:a62d8f4ef107fc74654fa5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
