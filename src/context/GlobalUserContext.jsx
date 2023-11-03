import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const GlobalUserContext = createContext(null);
/**
 * GlobalUserProvider Component - This component serves as a provider for the global user context. It manages the current user's authentication state and provides the user data to the rest of the application. It also handles the loading state while checking the authentication status.
 */
export default function GlobalUserProvider({ children }) {
  // Declare state variables for the current user and a loading indicator
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Use an effect hook to listen for changes to the authentication state
  useEffect(() => {
    // Create an unsubscribe function to unsubscribe from the authentication state listener
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Set the loading indicator to false and update the current user state
      setIsLoading(false);
      if (currentUser) setUser(currentUser);
      else setUser(null);
    });
    // Return the unsubscribe function to ensure that it is called when the component unmounts
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
