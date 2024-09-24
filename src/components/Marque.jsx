import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Links from "./Links";

function Marque() {
  return (
    <div className="pt-2">
      <Marquee
        autoFill="true"
        speed="30"
        className=" text-5xl  sm:h-24 h-16  sm:text-7xl"
      >
        Let's create something great together! -
      </Marquee>

      <div className="pt-6 sm:pt-4 flex font-serif text-1xl sm:text-2xl font-light border-b pb-2">
        <ul className="flex flex-col w-fit m-auto ">
          <Link to="/">Project</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        <Links />
      </div>
    </div>
  );
}

export default Marque;
