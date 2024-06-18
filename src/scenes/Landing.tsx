import Navbar from "../components/Navbar";
import paramourMobile from "../assets/paramourMobile.svg";
import arrow from "../assets/arrow.svg";
import stMobile from "../assets/stMobile.svg";
import dsMobile from "../assets/dsMobile.svg";
import prototypeMobile from "../assets/prototypeMobile.svg";
import towerMobile from "../assets/towerMobile.svg";
import Footer from "../footer/footer";

import pmMobile from "../assets/pmMobile.png";

const Landing = () => {
  return (
    <>
      {/* MOBILE VIEW */}

      <Navbar />
      <div className="relative block md:hidden">
        <img src={paramourMobile} alt="paramour-mobile" className="w-full" />
        <div className="absolute inset-8 flex flex-col pt-16 ">
          <h1 className="text-white text-5xl font-spartan font-bold">
            Project Paramour
          </h1>
          <h1 className="text-white font-spartan font-medium text-lg ">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </h1>
          <div>
            <button className="border flex font-spartan mt-20 font-bold border-black bg-black text-white px-7 py-5">
              See our Portfolio {""}
              <img src={arrow} alt="arrow button" className="ml-5" />
            </button>
          </div>
        </div>
      </div>

      {/* TABLET & DESKTOP VERSION */}
      <div className=" flex-row items-start gap-10 hidden md:flex">
        <div className="pt-24">
          <hr className="absolute top-0 left-12 w-[1px] h-24 bg-rectangle transform translate-x-0 translate-y-0" />
          <span className="text-ash flex rotate-90 whitespace-nowrap tracking-extra-wide">
            HOME
          </span>
        </div>
        <div className="relative">
          <img
            src={pmMobile}
            alt="paramour-image"
            className="w-auto h-auto pt-12"
          />
          <div className="absolute pl-12 inset-8 flex flex-col justify-center">
            <h1 className="text-white text-8xl font-spartan font-bold">
              Project Paramour
            </h1>
            <h1 className="text-white font-spartan font-medium text-lg ">
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </h1>
            <div>
              <button className="border flex font-spartan mt-20 font-bold border-black bg-black text-white px-7 py-5">
                See our Portfolio {""}
                <img src={arrow} alt="arrow button" className="ml-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10 pt-10 pl-5 pr-5 font-normal text-lg inset-0 font-spartan">
        <h1 className="font-bold text-5xl">Welcome to Arch Studio</h1>
        <h1>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.{" "}
        </h1>
        <h1>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </h1>{" "}
        <h1>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </h1>
      </div>

      <div className="relative mt-20 mb-20">
        <img src={stMobile} alt="small-team" className="w-screen" />

        <div className="absolute inset-8 flex flex-col pt-28 ">
          <h1 className="text-white text-5xl font-spartan font-bold">
            Small team, big ideas
          </h1>

          <div>
            <button className="border flex font-spartan mt-5 font-bold border-black bg-black text-white px-7 py-5">
              About us {""}
              <img src={arrow} alt="arrow button" className="ml-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="font-spartan pl-5 pr-5">
        <h1 className="font-bold text-5xl">Featured</h1>

        <div className="relative mt-5">
          <img src={dsMobile} alt="del sol" className="w-screen" />
          <div className="absolute inset-5 flex flex-col pt-28 ">
            <h1 className="text-white text-3xl font-spartan font-bold">
              Project Del Sol
            </h1>
            <h1 className="text-white text-lg font-spartan font-normal">
              View All Projects
            </h1>
          </div>
        </div>

        <div className="relative mt-12">
          <img src={towerMobile} alt="tower" className="w-screen" />
          <div className="absolute inset-5 flex flex-col pt-28 ">
            <h1 className="text-white text-3xl font-spartan font-bold">
              228B Tower
            </h1>
            <h1 className="text-white text-lg font-spartan font-normal">
              View All Projects
            </h1>
          </div>
        </div>

        <div className="relative mt-12">
          <img src={prototypeMobile} alt="prototype" className="w-screen" />
          <div className="absolute inset-5 flex flex-col pt-28 ">
            <h1 className="text-white text-3xl font-spartan font-bold">
              Le Prototype
            </h1>
            <h1 className="text-white text-lg font-spartan font-normal">
              View All Projects
            </h1>
          </div>

          <button className="border flex items-center font-spartan mt-5 font-bold border-black bg-black text-white pl-32 pr-8 py-5 md:pl-80 md:pr-8 md:py-5 w-full md:w-full sm:w-auto">
            See All
            <img src={arrow} alt="arrow button" className="ml-2 md:ml-5" />
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
