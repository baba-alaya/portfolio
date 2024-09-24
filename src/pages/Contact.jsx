import Links from "../components/Links";
import Navigation from "../components/Navigation";

import image from "../assets/hero.jpg";
import PageNav from "../components/PageNav";
function Contact() {
  return (
    <>
      <div className="h-screen w-screen text-white p-2 max-w-[1600px] m-auto  ">
        <Navigation />
        <div className="flex  gap-4 sm:gap-8 mt-20 text-2xl">
          <div className="h-48 w-2/4 sm:w-2/5 md:w-3/12">
            <img src={image} className="w-full h-full object-cover" alt="" />
          </div>
          <Links about={true} />
        </div>
        <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] pt-10 text-center">
          Contact Me
        </h2>
      </div>
      <PageNav />
    </>
  );
}

export default Contact;
