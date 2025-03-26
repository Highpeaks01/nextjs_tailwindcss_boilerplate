import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getMessaging, isSupported } from "firebase/messaging"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBa3Dwkqy0ChAhBitdFdgEORI8MhlJa75s",
  authDomain: "project0218745.firebaseapp.com",
  projectId: "project0218745",
  storageBucket: "project0218745.firebasestorage.app",
  messagingSenderId: "792358622760",
  appId: "1:792358622760:web:a85b4d162c45277254c71d",
  measurementId: "G-GXNGZVK5QM"
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);

//Initialize auth
const auth = getAuth(app)
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

let messaging
(async () => {
  if (await isSupported()) {
    messaging = getMessaging(app)
  } else {
    console.warn("Firebase Messaging is not supported in this environment.")
  }
})

export { app, auth, analytics, messaging };
