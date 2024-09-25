import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { ActiveContext } from "../context/ActiveProvider";
import { useContext } from "react";
//
function PageNav() {
  const { state, toggleActive } = useContext(ActiveContext);
  function HandleClick() {
    toggleActive(false);
  }
  return (
    <div
      className={`  ${state ? " opacity-100" : "opacity-0"} fixed top-0 left-0
         flex flex-col justify-between text-center h-dvh w-screen overflow font-sans bg-black text-white p-2 transition-opacity duration-500`}
    >
      <Navigation type="close" />

      <div
        className={` ${
          state ? " block" : "hidden"
        } space-y-10 lg:space-y-7 lg:text-9xl  sm:text-8xl text-7xl font-light  b `}
      >
        <Link to="/" onClick={HandleClick} className="block w-fit text m-auto ">
          <span className="text-sm pr-1">(1)</span>Home
        </Link>
        <Link
          to="/about"
          onClick={HandleClick}
          className=" block w-fit  text m-auto"
        >
          About<span className="text-sm pl-1 ">(2)</span>
        </Link>
        <Link
          to="/contact"
          onClick={HandleClick}
          className=" block w-fit text m-auto"
        >
          <span className="text-sm pr-1">(3)</span>Contact
        </Link>
      </div>
      <p className="font-serif font-light pb-3 ">Available for freelance</p>
    </div>
  );
}

export default PageNav;
