import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.init";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;