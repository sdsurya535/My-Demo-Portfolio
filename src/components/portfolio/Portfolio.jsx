import "./Portfolio.css";
import portfolio1 from "../../assets/portfolio-01 (1).jpg";
import apps from "../../assets/apps.jpg";
import social from "../../assets/social.jpg";
import webdesign from "../../assets/webdesign.jpg";
import figma from "../../assets/figma.jpg";
import photoshop from "../../assets/photoshop.jpg";

const Portfolio = () => {
  const myPortfolio = [
    {
      img: portfolio1,
      title: "Development",
      description: "The service provided for design",
    },
    {
      img: apps,
      title: "Application",
      description: "Mobile app landing design & app maintain",
    },
    {
      img: photoshop,
      title: "Photoshop",
      description: "Logo design creativity & Application",
    },
    {
      img: figma,
      title: "Figma",
      description: "Mobile app landing design & Services",
    },
    {
      img: social,
      title: "Web Design",
      description: "Design for technology & services",
    },
    {
      img: webdesign,
      title: "Web Design",
      description: "App for tecnology & services",
    },
  ];
  return (
    <div>
      <div className="portfolio-sec pt-32 sm:pt-32 md:pt-64  max-w-[1420px] sm:px-20 md:px-10  mx-auto">
        <p id="portfolio" className="font-monst text-center text-[12px]  uppercase sm:text-[12px] md:text-[14px] mb-2 tracking-widest font-medium text-[#f9004d]">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <h1 className="text-center text-[#3c3e41] mb-8 font-bold font-monst text-[40px] sm:text-[40px] md:text-[60px]">
          My Portfolio
        </h1>

        <div className="card-s grid grid-cols-1 px-3 md:px-0 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10">
          {myPortfolio.map((items) => (
            <div
              className="inner-c  py-[30px] px-10 lg:px-10 md:px-5"
              key={items.title}
            >
              <div className="img rounded-md">
                <img
                  src={items.img}
                  className="w-[100%] cursor-pointer  mx-auto object-cover"
                  alt=""
                />
              </div>
              <div className="text-content mt-4 flex-grow">
                <p className="uppercase mb-3 text-[12px] tracking-wider font-medium text-[#ff104f]">
                  {items.title}
                </p>
                <h2 className="text-[#1e2125] transition duration-300 font-monst text-[23px] font-semibold cursor-pointer mt-auto">
                  {items.description}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
