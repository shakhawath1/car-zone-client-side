// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9KDCCeNF_hlizo7MmKUasrFqdJ8Nyqkg",
  authDomain: "car-zone-e9458.firebaseapp.com",
  projectId: "car-zone-e9458",
  storageBucket: "car-zone-e9458.appspot.com",
  messagingSenderId: "1062339268308",
  appId: "1:1062339268308:web:46d8180b3aa60235537541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;