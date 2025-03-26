import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getMessaging, isSupported } from "firebase/messaging"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {};

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
