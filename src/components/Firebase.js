import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDk-XrsyaprRcZbmxe5m_60Q4apVLRnmjY",
    authDomain: "image-upload-db114.firebaseapp.com",
    projectId: "image-upload-db114",
    storageBucket: "image-upload-db114.appspot.com",
    messagingSenderId: "249535564208",
    appId: "1:249535564208:web:b2691644ee209d6ca1ae75",
    measurementId: "G-BKXRB7D8NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);