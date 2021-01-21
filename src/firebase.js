import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFCtzAKAkyyczo4kL4zoPNBUxjFXGht4Q",
    authDomain: "facebook-31d78.firebaseapp.com",
    databaseURL: "https://facebook-31d78.firebaseio.com",
    projectId: "facebook-31d78",
    storageBucket: "facebook-31d78.appspot.com",
    messagingSenderId: "770397471305",
    appId: "1:770397471305:web:425b1ee300698e3a16b598"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db