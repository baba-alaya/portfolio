import { children } from "react";
import { ActiveContext } from "../context/ActiveProvider";
import { useContext } from "react";

function Hero({ children }) {
  
  return <div className="font-serif h-auto flex flex-col ">{children}</div>;
}

export default Hero;
