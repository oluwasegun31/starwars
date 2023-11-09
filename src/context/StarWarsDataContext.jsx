import { createContext, useState } from "react";
import { getDatabaseLogic } from "../firebase/getDatabase";

export const StarWarsContext = createContext(null);

export const StarWarsProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const showCharacters = async () => {
    setIsLoading(true);
    const data = await getDatabaseLogic("characters");
    setCharacters(data);
    setIsLoading(false);
  };

  return (
    <StarWarsContext.Provider value={{ characters, isLoading, showCharacters }}>
      {children}
    </StarWarsContext.Provider>
  );
};
