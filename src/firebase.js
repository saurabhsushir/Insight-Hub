// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCUKgt1R3M4PgV60cpQaJJFKKm9n1EpQCM",
    authDomain: "newsaggregator-hehe.firebaseapp.com",
    projectId: "newsaggregator-hehe",
    storageBucket: "newsaggregator-hehe.appspot.com",
    messagingSenderId: "664446929095",
    appId: "1:664446929095:web:7d92bad94d37223fb496e2",
    measurementId: "G-1BBWRS14PH"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;