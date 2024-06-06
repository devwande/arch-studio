import arch from "../assets/arch.svg";
import paramour from "../assets/paramour.svg";

const Landing = () => {
  return (
    <>
      

      <div>
      
        <div className="flex flex-row gap-10 pl-24 pt-10">
        <div className="w-6 flex items-center justify-center">
        <span className="text-gray rotate-90 whitespace-nowrap">HOME</span>
      </div>
          <img src={arch} alt="arch image" />
          <div className="flex flex-row gap-5 font-bold font-spartan text-gray">
            <button>Portfolio</button>
            <button>About us</button>
            <button>Contact</button>
          </div>
        </div>
      </div>

      <div className="px-24 pt-10">
        <img src={paramour} alt="paramour image" className="w-full h-full" />
      </div>
    </>
  );
};

export default Landing;
