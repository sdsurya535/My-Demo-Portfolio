import "./Hero.css";
import profile from "../../assets/CopyImage.jpeg";

const Hero = () => {
  return (
    <div>
      <div id="home" className="hero mt-0  min-h-[90vh] flex max-w-[1420px]  mx-auto lg:flex-row flex-col  justify-between items-center md:px-12 ">
        <div className=" w-full mb-28 lg:w-2/4 px-5  hero-content  ">
          <p className="text-[14px] lg:text-start  content uppercase font-monst mb-6 text-[#3c3e41] font-medium tracking-[3px]">
            welcome to my portfolio
          </p>

          <h1 className="lg:text-[3rem]  mb-5 leading-tight xl:text-[3.5rem] 2xl:text-[4rem] md:text-[3.5rem] text-[2.7rem]  lg:text-start text-[#1e2125] font-monst font-bold">
            Hi, I’m{" "}
            <span className="text-[#ff014f]">a Full Stack Web Developer.</span>{" "}
          </h1>

          <p className="lg:text-[18px] text-start text-[#3c3e41]  lg:text-start">
            I am a full stack web developer with knowledge in front-end and
            back-end development. I have knowledge in creating user-friendly
            interfaces and implementing robust server-side logic. Let&apos;s
            build something amazing together.
          </p>

          <div className="btns lg:mt-24 mt-8">
            <p className="uppercase tracking-widest text-start font-medium mb-4 text-sm text-[#1e2125]">
              find with me
            </p>
            <div className="socialbtn flex gap-x-5">
              <a href="#" className="px-4 py-4  rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a href="#" className="px-4 py-4  rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a href="#" className="px-4 py-4  rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-img lg:mb-28  px-8 py-8  order-first lg:order-last mb-9">
          <img
            className=" md:w-[49rem] object-cover  xl:[33rem] lg:w-[29rem] "
            src={profile}
            alt=""
          />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
