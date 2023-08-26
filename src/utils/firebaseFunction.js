import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { Firestore } from "../firebase.config";

// Saving New Item
export const saveNewItem = async (data) => {
  await setDoc(doc(Firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};
// getall message
export const getMessageData = async () => {
  // getDocs helps us to get all the messageData
  const items = await getDocs(
    query(collection(Firestore, "messages"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
// getall food items
export const getAllFoodItems = async () => {
  // getDocs helps us to get all the foodItems
  const items = await getDocs(
    query(collection(Firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
