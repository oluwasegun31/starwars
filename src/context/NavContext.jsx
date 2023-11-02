import { createContext, useState } from "react";
/**
 * NavProvider Component
 * This component provides a context to manage the nav open state
 */
export const NavContext = createContext(null);

export default function NavProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
}
