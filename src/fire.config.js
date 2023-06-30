import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app'
import "firebase/firestore"
import { initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAycPH0e54OEuQKZHJlJVBzrl8PJwE5eEw",
    authDomain: "test-b1637.firebaseapp.com",
    projectId: "test-b1637",
    storageBucket: "test-b1637.appspot.com",
    messagingSenderId: "912702084020",
    appId: "1:912702084020:web:7c4470b95d458da35558e1",
    measurementId: "G-PWEJXF3Q4M"
  };

const app = initializeFirestore(firebaseConfig)
export const storage= getStorage(app)