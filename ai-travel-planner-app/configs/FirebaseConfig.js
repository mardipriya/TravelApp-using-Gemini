import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqR-PFTwW6gb3Lq3359o6ApOznl1yt-74",
  authDomain: "ai-travel-planner-2c4a4.firebaseapp.com",
  projectId: "ai-travel-planner-2c4a4",
  storageBucket: "ai-travel-planner-2c4a4.firebasestorage.app",
  messagingSenderId: "1099032676912",
  appId: "1:1099032676912:web:bfc94984578a0e76fefbf5",
  measurementId: "G-W1H54STSY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { app, auth, db };
