import { useContext } from "react";
import { ActiveContext } from "../context/ActiveProvider";
import hamburger from "../assets/hamburger.svg";

import close from "../assets/close.svg";

function Navigation({ type }) {
  const { state, toggleActive } = useContext(ActiveContext);
  return (
    <div className=" flex items-center justify-between h-10 ">
      <p className="text-3xl font-sans font-extralight ">Ibraheem</p>

      <img
        src={!type ? hamburger : close}
        alt={!type ? "menu icon" : "clse menu"}
        onClick={toggleActive}
        className={` z-20 cursor-pointer w-10 h-10 ${
          type === "close" && state === false ? "hidden  " : "block"
        }
        ${type !== "close" && state !== false ? "hidden  " : "block"}`}
      />
    </div>
  );
}

export default Navigation;
