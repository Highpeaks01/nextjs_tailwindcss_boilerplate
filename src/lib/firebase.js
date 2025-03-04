import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getMessaging, isSupported } from "firebase/messaging"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwYLNbZ7OyfFvDZi2P39rNKS9xvkEjqzU",
  authDomain: "project0147584-553e2.firebaseapp.com",
  projectId: "project0147584-553e2",
  storageBucket: "project0147584-553e2.firebasestorage.app",
  messagingSenderId: "204311492227",
  appId: "1:204311492227:web:a090716e1d054150b3cdb6",
  measurementId: "G-SE078W3EXJ"
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
