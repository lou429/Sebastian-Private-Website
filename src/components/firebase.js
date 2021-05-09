import firebase from 'firebase'; 

const {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
}  = process.env;

// export const firebaseConfig = {
//     apiKey: FIREBASE_API_KEY,
//     authDomain: FIREBASE_AUTH_DOMAIN,
//     databaseURL: FIREBASE_DATABASE_URL,
//     projectId: FIREBASE_PROJECT_ID,
//     storageBucket: FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//     appId: FIREBASE_APP_ID,
//     measurementId: FIREBASE_MEASUREMENT_ID
// };

export const firebaseConfig = {
    apiKey: "AIzaSyBvLs4BTqlt80bDTppZ70wVNKr9ajaEdzc",
    authDomain: "home-wesbite.firebaseapp.com",
    databaseURL: "https://home-wesbite-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "home-wesbite",
    storageBucket: "home-wesbite.appspot.com",
    messagingSenderId: "700343307340",
    appId: "1:700343307340:web:47407584feb939d20078e9",
    measurementId: "G-B0KS2J6TT6"
  };

export const firebase_app = firebase.initializeApp(firebaseConfig);