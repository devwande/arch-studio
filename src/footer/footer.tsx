import archMobile from "../assets/arch-mobile.svg";
import arrow from "../assets/arrow.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col block md:hidden pt-40 relative items-center">
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

      <div className="flex mt-40 bg-lightash w-full md:w-[612px]">
        <div className="flex justify-between items-center w-full">
          <img src={archMobile} alt="arch-logo" className="hidden md:block" />

          <div className="hidden md:flex md:space-x-16 md:mr-5 md:ml-5 text-gray font-bold font-spartan text-lg">
            <button className="hover:text-black whitespace-nowrap">
              Portfolio
            </button>
            <button className="hover:text-black whitespace-nowrap">
              About Us
            </button>
            <button className="hover:text-black whitespace-nowrap">
              Contact
            </button>
          </div>
        </div>

        <div className="hidden md:flex transform mt-6 translate-x-36">
          <button className="flex items-center justify-center font-spartan font-bold text-lg border border-black bg-black text-white w-[252px] h-[72px] ">
            See Our Portfolio
            <img src={arrow} alt="arrow button" className="ml-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
