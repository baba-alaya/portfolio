import { useContext } from "react";
import { ActiveContext } from "../context/ActiveProvider";

function Navigation({ type }) {
  const { state, toggleActive } = useContext(ActiveContext);
  return (
    <div className="pt-1 pb-2 flex items-center justify-between">
      <p className="text-3xl font-sans font-extralight ">Ibraheem</p>

      <button
        onClick={toggleActive}
        className={`font-serif z-10 cursor-pointer ${
          type === "close" && state === false ? "hidden  " : "block"
        }  ${type !== "close" && state !== false ? "hidden -z-10  " : "block"}`}
      >
        {type === "close" ? "close" : "open"}
      </button>
    </div>
  );
}

export default Navigation;
