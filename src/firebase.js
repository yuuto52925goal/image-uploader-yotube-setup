// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt12MAagv69-UKxYaiSJka82846osPquc",
  authDomain: "image-uploader-bb346.firebaseapp.com",
  projectId: "image-uploader-bb346",
  storageBucket: "image-uploader-bb346.appspot.com",
  messagingSenderId: "96120042594",
  appId: "1:96120042594:web:6143a26f7aa309ce348d3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage; 
