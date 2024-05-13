import firebase_app from "../config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);
export const signIn = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
};
