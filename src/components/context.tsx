"use client";

import { ReactNode, createContext } from "react";
import Navbar from "./navbar";

export const Context = createContext<{}>({});

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <Context.Provider value={{}}>
      <div className="container">
        <Navbar />
        <span className="left"></span>
        {children}
        <span className="right"></span>
      </div>
    </Context.Provider>
  );
}
