import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9GX1HQOVGikwLLcfPw_8PfVAVx1aVlsE",
  authDomain: "full-stack-project-1-4c4f8.firebaseapp.com",
  projectId: "full-stack-project-1-4c4f8",
  storageBucket: "full-stack-project-1-4c4f8.appspot.com",
  messagingSenderId: "935431933750",
  appId: "1:935431933750:web:42b9768f0efe3e89d8ad97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
