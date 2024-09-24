import { children, createContext, useState } from "react";

export const ActiveContext = createContext(false);

function ActiveProvider({ children }) {
  const [state, setState] = useState(false);
  function toggleActive() {
    setState((prev) => !prev);

    if (!state) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100dvh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }
  return (
    <ActiveContext.Provider value={{ state, toggleActive ,about:true }}>
      {children}
    </ActiveContext.Provider>
  );
}

export default ActiveProvider;
