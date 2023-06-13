"use client";

import { usePathname } from "next/navigation";

import { ReactNode, createContext, useEffect, useState } from "react";
import Navbar from "./navbar";

export const Context = createContext<any>({});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setClickedMenu(true);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Context.Provider value={{ open, handleOpen, clickedMenu }}>
      <div className="container">
        <Navbar />
        <span className="left"></span>
        {children}
        <span className="right"></span>
      </div>
    </Context.Provider>
  );
}
