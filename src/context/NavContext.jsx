import { createContext, useState } from "react";

export const NavContext = createContext(null);

export default function NavProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
}
