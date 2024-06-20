import Navbar from "../components/Navbar";
import paramour from "../assets/paramour.png";
import arrow from "../assets/arrow.svg";
import st from "../assets/st.png";
import desol from "../assets/de-sol.png";
import prototype from "../assets/prototype.png";
import tower from "../assets/tower.png";
import Footer from "../footer/footer";

import pm from "../assets/pm.svg";

const Landing = () => {
  return (
    <>
      {/* MOBILE VIEW */}

      <Navbar />
      <div className="relative block md:hidden">
        <img src={paramour} alt="paramour-mobile" className="w-full" />
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
      {/* NOTE: CHANGE THE IMAGES TO CLEARER ONES(BITMAP IN FIGMA) */}
      <div className="flex-row items-start hidden md:flex">
        <div className="pt-24">
          <hr className="absolute top-0 left-12 w-[1px] h-24 bg-rectangle transform translate-x-0 translate-y-0" />
          <span className="text-ash flex rotate-90 whitespace-nowrap tracking-extra-wide">
            HOME
          </span>
        </div>
        <div className="relative">
          <img src={pm} alt="paramour-image" className="w-auto  h-auto pt-12" />
          <div className="absolute inset-8 flex flex-col justify-center md:pl-8">
            <h1 className="text-white text-8xl font-spartan font-bold md:pt-16">
              Project Paramour
            </h1>
            <h1 className="text-white font-spartan font-medium text-lg ">
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </h1>
            <div>
              <button className="border flex font-spartan mt-12 font-bold border-black bg-black text-white px-7 py-5">
                See our Portfolio {""}
                <img src={arrow} alt="arrow button" className="ml-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pl-5 pr-5 md:pl-24 md:pr-28 font-normal text-lg inset-0 font-spartan">
        <p className="text-lightash font-spartan font-bold text-9xl hidden md:block tracking-wide  ">
          {" "}
          Welcome
        </p>
        <div className="space-y-10">
          <h1 className="font-bold text-5xl md:text-7xl md:w-2/3">
            Welcome to Arch Studio
          </h1>
          <h1>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.{" "}
          </h1>
          <h1>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </h1>{" "}
          <h1>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </h1>
        </div>
      </div>

      <div className="relative mt-20 mb-20">
        <img
          src={st}
          alt="small-team"
          className="w-screen md:pl-24 md:pr-28 md:h-[560px]"
        />

        <div className="absolute inset-8 md:inset-24 md:pl-16 md:pr-5 flex flex-col pt-28 md:pt-16">
          <h1 className="text-white text-5xl md:text-7xl font-spartan font-bold">
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

      <div className="font-spartan pl-5 pr-5 md:pl-24 md:pr-28">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="font-bold text-5xl md:text-7xl">Featured</h1>
          <button className="hidden md:flex items-center font-spartan font-bold border-black bg-black text-white px-10 py-4 border">
            See All
            <img src={arrow} alt="arrow button" className="ml-5" />
          </button>
        </div>

        <div className="relative mt-5">
          <div className="relative flex flex-row">
            <img src={desol} alt="del sol" className="w-screen h-[240px]" />
            <div className="absolute inset-5 flex flex-col pt-28">
              <h1 className="text-white text-3xl font-spartan font-bold">
                Project Del Sol
              </h1>
              <h1 className="text-white text-lg font-spartan font-normal">
                View All Projects
              </h1>
            </div>
            <p className="absolute top-10 right-5 text-white font-spartan font-bold text-10xl opacity-50 hidden md:block">
              1
            </p>
          </div>
        </div>

        <div className="relative mt-5">
          <div className="relative flex flex-row">
            <img src={tower} alt="tower" className="w-screen h-[240px]" />
            <div className="absolute inset-5 flex flex-col pt-28">
              <h1 className="text-white text-3xl font-spartan font-bold">
                228B Tower
              </h1>
              <h1 className="text-white text-lg font-spartan font-normal">
                View All Projects
              </h1>
            </div>
            <p className="absolute top-10 right-5 text-white font-spartan font-bold text-10xl opacity-50 hidden md:block">
              2
            </p>
          </div>
        </div>

        <div className="relative mt-5">
          <div className="relative flex flex-row">
            <img
              src={prototype}
              alt="prototype"
              className="w-screen h-[240px]"
            />
            <div className="absolute inset-5 flex flex-col pt-28">
              <h1 className="text-white text-3xl font-spartan font-bold">
                Le Prototype
              </h1>
              <h1 className="text-white text-lg font-spartan font-normal">
                View All Projects
              </h1>
            </div>
            <p className="absolute top-10 right-5 text-white font-spartan font-bold text-10xl opacity-50 hidden md:block">
              3
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
