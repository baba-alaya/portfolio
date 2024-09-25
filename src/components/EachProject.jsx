import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";

function EachProject({ work }) {
  return (
    <div
      className={` ${
        work.id === "reverse" ? "sm:flex-row-reverse " : "sm:flex-row"
      } py-5 relative sm:flex  gap-4 `}
    >
      <div className="flex-1">
        <p
          className={` sm:absolute lg:text-3xl ${
            work.id === "reverse"
              ? "sm:left-1  md:left-4"
              : "sm:right-1 md:right-4"
          }`}
        >
          {work.num}
        </p>
        <h2
          className={`text-3xl py-2 sm:pb-0 sm:absolute lg:text-5xl ${
            work.id === "reverse"
              ? "sm:left-5 sm:top-12 md:left-12 md:top-16 "
              : "sm:right-5 sm:top-12 md:right-12 md:top-16"
          }  `}
        >
          {work.title}
        </h2>
        <img
          src={work.image}
          className="h-96 w-screen object-cover sm:w-full"
          alt=""
        />
      </div>
      <div className="  flex justify-end align-center flex-col sm:flex-1 sm:flex pb-0 sm:gap-3 sm:pb-24 lg:pb-20 xl:pb-24  ">
        <p className="py-2  float-right text-xl lg:text-2xl ">{work.text}</p>
        <div className="flex justify-between  sm:justify-between lg:justify-start lg:gap-10  ">
          <p>{work.page}</p>
          <div
            className="flex
          "
          >
            <Link to={work.link}>{work.site} </Link>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachProject;
