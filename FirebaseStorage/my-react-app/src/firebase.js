import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAjqqin2RfuutrSq4DeHvIPlY0HPbFRPSc",
    authDomain: "fir-storage-c9b9b.firebaseapp.com",
    projectId: "fir-storage-c9b9b",
    storageBucket: "fir-storage-c9b9b.appspot.com",
    messagingSenderId: "693048290343",
    appId: "1:693048290343:web:9d6f19c032a34331adf202",
    measurementId: "G-XX5ETT2E47"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);