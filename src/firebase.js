import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6loFOhcvYWYyKnNgtDyRs0_jQO_Vc8Xc",
    authDomain: "slack-clone-3e255.firebaseapp.com",
    projectId: "slack-clone-3e255",
    storageBucket: "slack-clone-3e255.appspot.com",
    messagingSenderId: "116650940044",
    appId: "1:116650940044:web:144f790354c2c6b87b0da9",
    measurementId: "G-NL4BTY3XVE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider }
export default db;