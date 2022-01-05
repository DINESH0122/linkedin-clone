import firebase from  "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyAy-BK24tCNkRTeeL_PQYczLGmbMBe9yCQ",
  authDomain: "linkedin-clone-c8a01.firebaseapp.com",
  projectId: "linkedin-clone-c8a01",
  storageBucket: "linkedin-clone-c8a01.appspot.com",
  messagingSenderId: "277348943901",
  appId: "1:277348943901:web:c251e87e423b09860e1ef4",
  measurementId: "G-7LWHH313KY",
};


const firebaseApp = firebase.initializeAPP(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};

export default db;


