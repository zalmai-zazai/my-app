'use client';
import { useState } from 'react';
import { createContext } from 'react';

interface MenuContextType {
  toggle: () => void;
  open: boolean;
}

export const MenuContext = createContext<MenuContextType | null>(null);

const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <MenuContext.Provider value={{ toggle, open }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
