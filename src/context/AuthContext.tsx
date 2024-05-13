"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import firebase_app from "@/firebase/config";
import { Spinner } from "@chakra-ui/react";

interface AuthContextProps {
  user: User | null;
  error: Error | null;
}

const auth = getAuth(firebase_app);
export const AuthContext = createContext<AuthContextProps>({
  user: null,
  error: null,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, error }}>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Spinner
            thickness="3px"
            speed="0.65s"
            emptyColor="black"
            color="white"
            size="xl"
          />
        </div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
