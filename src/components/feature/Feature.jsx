import "./Feature.css";
import { FaArrowRight } from "react-icons/fa";

const Feature = () => {
  return (
    <div>
      <div id="features" className="features-sec px-4  sm:px-2 md:px-10  max-w-[1420px] mx-auto">
        <p className="font-monst uppercase text-[14px] mb-2 tracking-widest font-medium text-[#f9004d]">
          features
        </p>
        <h1 className="font-monst capitalize mb-5 font-bold text-[#3c3e41] text-[60px]">
          What I do
        </h1>

        <div className="card-sec grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10  items-center transition duration-500">
          <div className="inner-card px-[50px] py-[35px] cursor-pointer md:max-w-[415px] md:h-[340px]">
            <div className="content flex flex-col justify-center items-start gap-y-6">
              <div className="icon  text-[#ff014f] transition duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
              <a className="text-[24px] transition duration-500 font-medium">
                Rest APIs
              </a>
              <p className="text-[1rem] transition duration-500 text-[#3c3e41]">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
              <a
                href="#"
                className=" arrow text-[30px] transition duration-500 translate-y-2"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="inner-card px-[50px] py-[35px] cursor-pointer md:max-w-[415px] md:h-[340px]">
            <div className="content flex flex-col justify-center items-start gap-y-6">
              <div className="icon  text-[#ff014f] transition duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-book-open"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <a className="text-[24px] transition duration-500 font-medium">
                Backend Development
              </a>
              <p className="text-[1rem] transition duration-500 text-[#3c3e41]">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
              <a
                href="#"
                className=" arrow text-[30px] transition duration-500 translate-y-2"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="inner-card px-[50px] py-[35px] cursor-pointer md:max-w-[415px] md:h-[340px]">
            <div className="content flex flex-col justify-center items-start gap-y-6">
              <div className="icon  text-[#ff014f] transition duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-tv"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </div>
              <a className="text-[24px] transition duration-500 font-medium">
                Frontend Development
              </a>
              <p className="text-[1rem] transition duration-500 text-[#3c3e41]">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
              <a
                href="#"
                className=" arrow text-[30px] transition duration-500 translate-y-2"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>

          <div className="inner-card  px-[50px] py-[35px] cursor-pointer md:max-w-[415px] md:h-[340px]">
            <div className="content flex flex-col justify-center items-start gap-y-6">
              <div className="icon  text-[#ff014f] transition duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitch"
                >
                  <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                </svg>
              </div>
              <a className="text-[24px] transition duration-500 font-medium">
                Reponsive Design
              </a>
              <p className="text-[1rem] transition duration-500 text-[#3c3e41]">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
              <a
                href="#"
                className=" arrow text-[30px] transition duration-500 translate-y-2"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="inner-card px-[50px] py-[35px] cursor-pointer md:max-w-[415px] md:h-[340px]">
            <div className="content flex flex-col justify-center items-start gap-y-6">
              <div className="icon  text-[#ff014f] transition duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-wifi"
                >
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                  <line x1="12" y1="20" x2="12.01" y2="20"></line>
                </svg>
              </div>
              <a className="text-[24px] transition duration-500 font-medium">
                Java Developer
              </a>
              <p className="text-[1rem] transition duration-500 text-[#3c3e41]">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
              <a
                href="#"
                className=" arrow text-[30px] transition duration-500 translate-y-2"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="inner-card   px-[50px] py-[35px] cursor-pointer md:max-w-[415px] md:h-[340px]">
            <div className="content flex flex-col justify-center items-start gap-y-6">
              <div className="icon  text-[#ff014f] transition duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-slack"
                >
                  <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path>
                  <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                  <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path>
                  <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path>
                  <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path>
                  <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
                  <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path>
                  <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>
                </svg>
              </div>
              <a className="text-[24px] transition duration-500 font-medium">
                Spring Boot Developer
              </a>
              <p className="text-[1rem] transition duration-500 text-[#3c3e41]">
                I throw myself down among the tall grass by the stream as I lie
                close to the earth.
              </p>
              <a
                href="#"
                className=" arrow text-[30px] transition duration-500 translate-y-2"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
