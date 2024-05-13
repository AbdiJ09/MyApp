import firebase_app from "../config";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebase_app);

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
