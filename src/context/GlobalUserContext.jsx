import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const GlobalUserContext = createContext(null);
export default function GlobalUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false);
      if (currentUser) setUser(currentUser);
      else setUser(null);
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return (
    <GlobalUserContext.Provider value={{ user, setUser }}>
      {!isLoading && children}
    </GlobalUserContext.Provider>
  );
}
