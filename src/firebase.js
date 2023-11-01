// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5cuKkoWne1gwQXicvhYvOhp0LGnjPNXQ",
  authDomain: "netflix-react-abe6f.firebaseapp.com",
  projectId: "netflix-react-abe6f",
  storageBucket: "netflix-react-abe6f.appspot.com",
  messagingSenderId: "102465613146",
  appId: "1:102465613146:web:b1a8819708fe467314d763",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
