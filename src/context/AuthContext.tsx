"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
const auth = getAuth(firebase_app);
export const AuthContext = createContext({ user: null });
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div className="text-white">loading...</div> : children}
    </AuthContext.Provider>
  );
};
