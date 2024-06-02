import CompyImage from "/src/assets/CopyImage.jpeg";

const Footer = () => {
  return (
    <div>
      <div className="footer-sec mt-36 max-w-[1420px] mx-auto">
        <hr className=" h-[0.1px] opacity-[0.1] border-none bg-black  mx-auto" />
        <div className="image-con pb-3 pt-28 ">
          <img
            className="w-14 h-14 mx-auto rounded-full border-x-4 border-y-4 border-[#e2e2e2]"
            src={CompyImage}
            alt="Rounded avatar"
          />
        </div>
        <h1 className="uppercase text-center tracking-wider font-monst font-bold text-[22px] mb-3">
          Suryadutta Dash
        </h1>
        <p className="text-[#3c3e31] text-center mb-3">
          © 2024. All rights reserved by Suryadutta Dash{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
