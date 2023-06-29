// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
//  TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCLvVVGfhlfk-8dUaCo2EmBDqIzjJIm-ZY',
  authDomain: 'capstone-project-72cb0.firebaseapp.com',
  projectId: 'capstone-project-72cb0',
  storageBucket: 'capstone-project-72cb0.appspot.com',
  messagingSenderId: '1070393045643',
  appId: '1:1070393045643:web:17f91b7cf112862fc9da8e',
  measurementId: 'G-WSH3SLPBEJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
