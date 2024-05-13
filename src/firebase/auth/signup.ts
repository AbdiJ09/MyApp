import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import firebaseApp from "../config";

const auth = getAuth(firebaseApp);
export const signUp = async (email: string, password: string) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
};
