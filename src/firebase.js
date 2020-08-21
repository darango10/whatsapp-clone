import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAczEY9Bxc2zei4keOobOVPK_-FpHhztpA",
    authDomain: "clone-whatsapp123.firebaseapp.com",
    databaseURL: "https://clone-whatsapp123.firebaseio.com",
    projectId: "clone-whatsapp123",
    storageBucket: "clone-whatsapp123.appspot.com",
    messagingSenderId: "1047865062778",
    appId: "1:1047865062778:web:c992a19c07da178dfcd2c3",
    measurementId: "G-PV8XGGBV45"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
