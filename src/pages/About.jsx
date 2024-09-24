import Footer from "../components/Footer";
import Marque from "../components/Marque";
import Navigation from "../components/Navigation";
import PageNav from "../components/PageNav";

function About() {
  return (
    <div className="text-white p-2  max-w-[1600px] m-auto ">
      <Navigation />
      <div>
        <h1 className=" text-7xl py-6 lg:py-10  sm:text-9xl lg:text-[12rem] font-serif font-light ">
          Ibraheem
        </h1>
        <div className="lg:w-5/6 sm:w-11/12 sm:float-right sm:pb-10 pb-3">
          <p className="text-2xl sm:text-3xl font-sans">
            Hi, I’m I’m a passionate and dedicated Frontend Developer with over
            2 years of experience specializing in crafting modern, responsive,
            and visually appealing web applications. My expertise lies in a wide
            range of frontend technologies, including HTML, CSS, JavaScript,
            React, Next, Sass, Tailwind, and Bootstrap, allowing me to build and
            design seamless user interfaces that not only look great but provide
            an intuitive and efficient user experience. Throughout my journey,
            I’ve had the privilege of teaching HTML and CSS to aspiring
            developers, helping them understand the foundational concepts and
            best practices in web development. This teaching experience has
            reinforced my commitment to writing clean, maintainable code and
            building scalable applications. I enjoy mentoring others and
            contributing to the growth of the web development community. As a
            frontend developer, I constantly seek to stay updated with the
            latest technologies and trends, and I’m always eager to learn new
            tools and methodologies to improve my craft. My focus is on building
            user-centered web solutions that combine functionality with
            aesthetics, ensuring that my clients and users have a seamless
            experience across all devices. Whether I’m building sleek and
            interactive UIs using React, optimizing web performance, or
            collaborating with designers to bring creative visions to life, my
            goal is always to deliver the highest quality work. I’m excited
            about the future of web development and look forward to taking on
            new challenges and opportunities to create innovative solutions that
            push the boundaries of what’s possible. Let’s collaborate and build
            something extraordinary together:)
          </p>
        </div>
      </div>
      <Marque />
      <Footer />
      <PageNav />
    </div>
  );
}

export default About;
