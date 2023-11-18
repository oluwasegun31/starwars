import { createContext, useCallback, useState } from "react";
import { getDatabaseLogic } from "../firebase/getDatabase";

export const StarWarsContext = createContext(null);

export const StarWarsProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState([]);

  const showCharacters = useCallback(async () => {
    setIsLoading(true);
    const data = await getDatabaseLogic("characters");
    setCharacters(data);
    setIsLoading(false);
  });
  const showPlanets = useCallback(async () => {
    setIsLoading(true);
    const data = await getDatabaseLogic("planets");
    setPlanets(data);
    setIsLoading(false);
  });

  return (
    <StarWarsContext.Provider
      value={{ characters, isLoading, showCharacters, planets, showPlanets }}
    >
      {children}
    </StarWarsContext.Provider>
  );
};
