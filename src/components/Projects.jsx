import EachProject from "./EachProject";
import finbalance from "../assets/finbalance.png";
import zenfit from "../assets/zenfit.png";
import urbanthreads from "../assets/urbanthreads.png";
import swifttech from "../assets/swifttech.png";
import cashguard from "../assets/cashguard.png";
import greenleaf from "../assets/greenleaf1.png";

function Projects() {
  const works = [
    {
      image: swifttech,
      num: "001",
      page: "Landing Page",
      title: "SwiftTech",
      text: "A sleek, high-conversion landing page for an IT consulting firm designed to capture leads and showcase services with a modern, professional layout that highlights their expertise.",
      site: "View live site",
      link: "https://sirheritage-40dd2.web.app/",
    },
    {
      image: finbalance,
      num: "002",
      page: "Finance",
      title: "FinBalance",
      text: "An informative website for a financial advisory firm, featuring expert blogs, live financial data, and a secure client portal for clients to easily access their accounts and services.",
      site: "View live site",
      id: "reverse",
      link: "https://glitters.vercel.app/",
    },
    {
      image: urbanthreads,
      num: "003",
      page: "E-commerce",
      title: "UrbanThreads",
      text: "An online store for a streetwear fashion brand with simple navigation, product filters, and a seamless checkout process, offering customers a smooth shopping experience.",
      site: "View live site",
      link: "https://mishaay-beads.vercel.app/",
    },
    {
      image: cashguard,
      num: "004",
      page: "Finance",
      title: "CashGuard",
      text: "A lending company’s website featuring loan calculators and an easy-to-use application portal, designed for smooth navigation and quick online inquiries for potential borrowers.",
      site: "View live site",
      id: "reverse",
      link: "https://mishaay-beads.vercel.app/",
    },
    {
      image: greenleaf,
      num: "005",
      page: "E-commerce ",
      title: "GreenLeaf",

      text: "An organic skincare and beauty store focused on natural ingredients, featuring a detailed product catalog, secure payment options, and a subscription box service for recurring customers.",
      site: "View live site",
      link: "https://mishaay-beads.vercel.app/",
    },
    {
      image: zenfit,
      num: "006",
      page: "Landing Page ",
      title: "ZenFit",
      text: "A clean, engaging landing page for a nutrition brand promoting organic supplements and driving email sign-ups with a free eBook on healthy living and wellness tips.",
      site: "View live site",
      id: "reverse",
      link: "https://mishaay-beads.vercel.app/",
    },
  ];
  return (
    <div className="font-serif">
      <h2 className="font-sans text-4xl pb-3 border-b lg:text-5xl ">
        Featured Project
      </h2>
      <div className="divide-y divide-white border-b">
        {works.map((work) => (
          <EachProject key={work.title} work={work} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
