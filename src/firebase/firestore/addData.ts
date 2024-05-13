import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
type data = {
  name: string;
  house: string;
};
export default async function addData(
  collection: string,
  id: string,
  data: data
) {
  try {
    await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
    return { message: "Data successfully added", error: null };
  } catch (error) {
    return { message: null, error };
  }
}
