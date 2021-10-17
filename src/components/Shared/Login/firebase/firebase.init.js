import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initiateAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initiateAuthentication;

