import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getDocument(collectionName: string) {
  try {
    const usersCollection = collection(db, collectionName);
    const querySnapshot = await getDocs(usersCollection);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { data, error: null };
  } catch (error) {
    return { users: null, error };
  }
}
