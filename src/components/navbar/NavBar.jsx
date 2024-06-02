import "./NavBar.css";
import logo from "../../assets/CopyImage.jpeg";
import { RiMenuLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current.style.left === "-375px") {
      menuRef.current.style.left = "0";
    } else {
      menuRef.current.style.left = "-375px";
    }
  };

  const closeMenu = () => {
    menuRef.current.style.left = "-375px";
  };
  return (
    <div>
      <div
        className={`navbar ${
          isFixed ? "fixed" : ""
        }   transition duration-300  flex xl:px-20 lg:px-8 sm:px-10  px-3   justify-between items-center py-9  `}
      >
        <h1
          className={
            "text-lg sm:text-2xl font-semibold flex uppercase font-monst items-center gap-2"
          }
        >
          <img
            className="w-14 h-14  rounded-full border-x-4 border-y-4 border-[#e2e2e2]"
            src={logo}
            alt="Rounded avatar"
          ></img>
          Suryadutta Dash
        </h1>
        <div
          ref={menuRef}
          className="navbar-nav  font-medium uppercase lg:flex gap-x-9"
        >
          <a className=" flex md:flex lg:hidden xl:hidden">
            <div>
              <img
                className="w-14 h-14 mb-8  rounded-full border-x-4 border-y-4 border-[#e2e2e2]"
                src={logo}
                alt="Rounded avatar"
              ></img>
              <p className="mb-5 text-[#3c3e41] lowercase text-[16px] opacity-85">
                This is my personal portfolio. Let&apos;s build together.
              </p>
            </div>
            <a
              onClick={closeMenu}
              className="md:inline-block lg:hidden xl:hidden"
            >
              <RxCross2 className="text-[#ff014f] text-3xl cross" />
            </a>
            <hr />
          </a>
          <AnchorLink onClick={openMenu} className="anchor" href="#home">
            <a
              onClick={() => setMenu("home")}
              className={menu === "home" && "text-[#ff014f]"}
            >
              Home
            </a>
          </AnchorLink>
          <AnchorLink
            onClick={openMenu}
            className="anchor"
            offset={50}
            href="#features"
          >
            <a
              onClick={() => setMenu("features")}
              className={menu === "features" && "text-[#ff014f]"}
            >
              Features
            </a>
          </AnchorLink>
          <AnchorLink
            onClick={openMenu}
            className="anchor"
            offset={50}
            href="#portfolio"
          >
            <a
              onClick={() => setMenu("portfolio")}
              className={menu === "portfolio" && "text-[#ff014f]"}
            >
              Portfolio
            </a>
          </AnchorLink>
          <AnchorLink
            onClick={openMenu}
            className="anchor"
            offset={50}
            href="#contact"
          >
            <a
              onClick={() => setMenu("contact")}
              className={menu === "contact" && "text-[#ff014f]"}
            >
              Contact
            </a>
          </AnchorLink>
          <div className="btns lg:mt-24 md:inline-block lg:hidden xl:hidden mt-72 ">
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
                  className="feather feather-instagram hover:text-white"
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
                  className="feather feather-linkedin hover:text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a href="#" className="px-4 py-4  rounded-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-github hover:text-white "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="nav-btn sm:px-4 sm:py-3  md:hidden lg:inline-block hidden text-[#ff014f] uppercase rounded-md px-2 py-3">
          <a href="#">Download CV</a>
        </div>
        <a
          onClick={openMenu}
          className="md:inline-block lg:hidden cursor-pointer xl:hidden"
        >
          <RiMenuLine className="text-[#ff014f] text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
