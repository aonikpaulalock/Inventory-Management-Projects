import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcd9RXuVWUj2mVCKyF91jg7tNF76TdzdM",
  authDomain: "full-stack-project-1-5c62f.firebaseapp.com",
  projectId: "full-stack-project-1-5c62f",
  storageBucket: "full-stack-project-1-5c62f.appspot.com",
  messagingSenderId: "433794146225",
  appId: "1:433794146225:web:0f4548b01fa154709ce790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;