import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHjugqhNmfjZMjk0WunoyLU20gp07eU24",
  authDomain: "restaurantapp-nid-e0c2a.firebaseapp.com",
  databaseURL: "https://restaurantapp-nid-e0c2a-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-nid-e0c2a",
  storageBucket: "restaurantapp-nid-e0c2a.appspot.com",
  messagingSenderId: "34964862763",
  appId: "1:34964862763:web:e7d7eb319565f318abf76e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const Firestore = getFirestore(app);
const storage = getStorage(app);

export { app, Firestore, storage };
