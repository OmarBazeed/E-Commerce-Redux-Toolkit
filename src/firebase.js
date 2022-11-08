import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDGv1f1hs9iqIkb3MMeYdsKggFvBuFQr54",
    authDomain: "ecommerceauth-bdf13.firebaseapp.com",
    projectId: "ecommerceauth-bdf13",
    storageBucket: "ecommerceauth-bdf13.appspot.com",
    messagingSenderId: "892902790755",
    appId: "1:892902790755:web:0b6aae41a60e4944b80a56",
    measurementId: "G-LMFNX12WFT",
};
console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;