import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAagFswU-urmoGmqchu-8fXL_auqpaDJG8",
  authDomain: "house-marketplace-app-15f75.firebaseapp.com",
  projectId: "house-marketplace-app-15f75",
  storageBucket: "house-marketplace-app-15f75.appspot.com",
  messagingSenderId: "843793290913",
  appId: "1:843793290913:web:b775919c002b19e3fe02e0",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
