// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGnm0w27a0fMztIAKD5lNxdkRzwnqI9f8",
  authDomain: "de-chyun.firebaseapp.com",
  projectId: "de-chyun",
  storageBucket: "de-chyun.appspot.com",
  messagingSenderId: "259504563150",
  appId: "1:259504563150:web:a48a3a243a79551c90419f",
  measurementId: "G-F4830JZ236",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const cta_event_log = (content) => {
  logEvent(analytics, content, {
    content_type: "button",
    content_id: "P12453",
  });
};

export const test = () => {
  console.log("test");
};
