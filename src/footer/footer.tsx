import archMobile from "../assets/arch-mobile.svg";
import arrow from "../assets/arrow.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col pt-40 relative items-center">
        <div className="relative bg-lightash pb-[50px] w-full flex justify-center">
          <img
            src={archMobile}
            alt="arch-mobile "
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex flex-col items-center justify-center pt-24 text-lg text-center space-y-10 text-gray font-bold font-spartan">
            <button className="block">Portfolio</button>
            <button className="block">About Us</button>
            <button className="block">Contact</button>
            <button className="flex items-center justify center font-spartan mt-5 font-bold border border-black bg-black text-white pl-12 pr-8 py-5 md:pl-32 md:pr-28 md:py-5 w-full">
              See Our Portfolio
              <img src={arrow} alt="arrow button" className="ml-5 md:ml-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
