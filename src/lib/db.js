import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const saveData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log(`${collectionName} saved with ID: `, docRef.id);
  } catch (e) {
    console.error(`Error saving ${collectionName}: `, e);
  }
};
