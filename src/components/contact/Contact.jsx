import "./Contact.css";
import contact from "../../assets/contact.png";
import { FaArrowRight } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "00b2d4ea-770c-441f-978f-e76ea83b1de1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success(res.message);
      
    }
  };
  return (
    <div>
      <div  className="contact-sec  pt-32 sm:pt-32 md:pt-64   max-w-[1420px] px-4  sm:px-2  md:px-10  mx-auto">
        <p id="contact" className="font-monst text-center  uppercase text-[14px] mb-2 tracking-widest font-medium text-[#f9004d]">
          contact
        </p>
        <h1
          
          className="text-center text-[#3c3e41] mb-8 font-bold font-monst text-[32px] sm:text-[60px]"
        >
          Contact With Me
        </h1>
        <div className="contact-form grid grid-cols-12 gap-y-9  lg:gap-x-10">
          <div className="contact-form-inner px-[24px] sm:px-[30px] md:px-[38px] rounded-lg col-span-12 md:col-span-12 lg:col-span-5 py-10">
            <div className="img-container rounded-lg  ">
              <img
                src={contact}
                className=" w-[100%] mx-auto  object-cover"
                alt=""
              />
            </div>
            <div className="contact-text mt-5">
              <h1 className="text-[#1e2125] text-[22px] sm:text-[29px] font-bold  mb-5">
                Suryadutta Dash
              </h1>
              <p className="capitalize mb-5">chief operating officer</p>
              <p className="mb-5">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <p>
                Phone:<a href="">+91 7978627916</a>
              </p>
              <p>
                Email:<a href="">codingsurya335@gmail.com</a>
              </p>
            </div>
            <div className="btnss mt-8">
              <p className="uppercase opacity-[0.9]  tracking-widest text-start font-medium mb-4 text-sm">
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
                    className="feather feather-instagram opacity-[0.7]"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
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
                    className="feather feather-linkedin opacity-[0.7]"
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
                    className="bi bi-github opacity-[0.7]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-main col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="form-g font-monst grid grid-cols-12 gap-4"
            >
            <Toaster />
              <div className="mb-4 col-span-12 sm:col-span-12 md:col-span-6">
                <label
                  className="block uppercase text-[#363e41] mb-2  "
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 rounded"
                  id="name"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4 col-span-12 sm:col-span-12 md:col-span-6">
                <label
                  className="block mb-2 uppercase  text-[#363e41]"
                  htmlFor="name"
                >
                  phone number
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 rounded"
                  id="name"
                  type="text"
                  name="number"
                  required
                />
              </div>
              <div className="mb-4 col-span-12">
                <label
                  className="block uppercase mb-3  text-[#363e41]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-5 py-1  text-gray-700 rounded"
                  id="name"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4 col-span-12">
                <label
                  className="block uppercase mb-3  text-[#363e41]"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full px-5 py-1  text-gray-700 rounded"
                  id="subject"
                  type="text"
                  name="subject"
                  required
                />
              </div>
              <div className="mb-4 col-span-12">
                <label
                  className="block uppercase mb-3  text-[#363e41]"
                  htmlFor="subject"
                >
                  Your Message
                </label>
                <textarea
                  className="w-full px-5 py-1  text-gray-700 rounded resize-none"
                  id="subject"
                  type="text"
                  name="message"
                  rows={12}
                  required
                ></textarea>
              </div>
              <div className=" btn mb-4 col-span-12 text-center">
                <button
                  type="submit"
                  className="flex font-monst uppercase text-[14px] font-medium tracking-tight text-[#ff014f] items-center gap-x-1 justify-center w-full px-12 py-4  rounded-md"
                >
                  Send Message
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
