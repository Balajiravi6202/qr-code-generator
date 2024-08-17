// Import the necessary functions from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjSjSYv9Qo46mBa74zlHZsmUnDkn68j78",
  authDomain: "signin-5c1d4.firebaseapp.com",
  projectId: "signin-5c1d4",
  storageBucket: "signin-5c1d4.appspot.com",
  messagingSenderId: "942874926395",
  appId: "1:942874926395:web:bee48168017f8c5c7c6b1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
