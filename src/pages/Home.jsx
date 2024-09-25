import Projects from "../components/Projects";
import PageNav from "../components/PageNav";
import Content from "../components/Content";
import Navigation from "../components/Navigation";
import Marque from "../components/Marque";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className=" text-white max-w-[1600px] p-2 m-auto">
      <Navigation />
      <Content />
      <Projects />
      <Marque />
      <Footer />
      <PageNav />
    </div>
  );
}

export default Home;
