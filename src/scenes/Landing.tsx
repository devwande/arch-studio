import Navbar from "../components/Navbar";
import paramour from "../assets/paramour.png";
import paramourDesktop from "../assets/paramourDesktop.png";
import arrow from "../assets/arrow.svg";
import st from "../assets/st.png";
import desol from "../assets/de-sol.png";
import prototype from "../assets/prototype.png";
import tower from "../assets/tower.png";
import Footer from "../footer/footer";
import welcome from "../assets/welcome.jpg";
import stDesktop from "../assets/stDesktop.png";
import dsDesktop from "../assets/dsDesktop.png";
import towerDesktop from "../assets/towerDesktop.png";
import prototypeDesktop from "../assets/prototypeDesktop.png";
import pm from "../assets/pm.svg";

import { motion, useInView } from "framer-motion";
import React from "react";
import AnimatedProjects from "../components/AnimatedProjects";

import ProjectPages from "../components/ProjectPages";
import seraph from "../assets/seraph.png";
import federal from "../assets/federal.png";
import trinity from "../assets/trinity.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.4,
    },
  },
};

const Landing = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

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
          <hr className="absolute top-0 left-12 lg:left-16 w-[1px] h-24 bg-rectangle transform translate-x-0 translate-y-0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-ash flex rotate-90 whitespace-nowrap tracking-extra-wide lg:ml-4"
          >
            {["H", "O", "M", "E"].map((letter, index) => (
              <motion.span key={index} variants={itemVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="relative">
          <img
            src={pm}
            alt="paramour-image"
            className="w-auto block lg:hidden h-auto pt-12"
          />

          <ProjectPages
            src={paramourDesktop}
            alt="paramour"
            title="Project Paramour"
            content="Project made for an art museum near Southwest London. Project
            i Paramour is a statement of bold, modern architecture."
          />

          <ProjectPages
            src={seraph}
            alt="seraph"
            title="Seraph Station"
            content="The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
          />

          <ProjectPages
            src={federal}
            alt="federal"
            title="Federal II Tower"
            content="A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
          />

          <ProjectPages
            src={trinity}
            alt="trinity"
            title="Trinity Bank Tower"
            content="Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
          />
        </div>
      </div>
      <div className="container pt-10 md:pt-32 px-5 md:px-24 lg:pl-48 font-normal text-lg font-spartan relative ">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, fade: "fadeIn" }}
          className="text-lightash lg:absolute font-spartan font-bold text-9xl lg:text-10xl hidden md:block tracking-wide"
        >
          Welcome
        </motion.p>

        <div className="content flex flex-col lg:flex-row space-y-10 lg:space-y-5  lg:pl-48">
          <div className="text-content space-y-5 lg:mt-40 lg:w-5/6">
            <h1 className="font-bold text-5xl md:text-txl md:w-2/3">
              Welcome to Arch Studio
            </h1>
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony
              with the surrounding area to create truly stunning projects that
              will stand the test of time.
            </p>
          </div>

          <div className="image-content  w-auto hidden lg:block">
            <img
              src={welcome}
              alt="welcome-image"
              className="ml-28 mt-16 h-5/6"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-48  mb-20">
        <img
          src={st}
          alt="small-team"
          className="w-screen md:pl-24 md:pr-28 md:h-[560px] lg:hidden "
        />

        <img
          src={stDesktop}
          alt="big ideas"
          className="w-auto hidden lg:block lg:pl-48 h-100svh"
        />

        <div className="absolute inset-8 md:inset-24 md:pl-16 md:pr-5 lg:pl-72 flex flex-col pt-28 md:pt-16">
          <h1 className="text-white text-5xl md:text-7xl font-spartan font-bold lg:w-3/5">
            Small team, big ideas
          </h1>

          <div>
            <button className="border flex font-spartan mt-5 font-bold border-black bg-black lg:hover:bg-gray text-white px-7 py-5">
              About us {""}
              <img src={arrow} alt="arrow button" className="ml-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="font-spartan pl-5 pr-5 md:pl-24 lg:pl-48 md:pr-28 lg:pr-32 lg:pt-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="font-bold text-5xl md:text-7xl ">Featured</h1>
          <button className="hidden md:flex items-center font-spartan font-bold border-black bg-black lg:hover:bg-gray text-white px-10 py-4  border">
            See All
            <img src={arrow} alt="arrow button" className="ml-5 " />
          </button>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="hidden lg:block pt-16"
        >
          <div className="flex gap-8">
            <AnimatedProjects
              src={dsDesktop}
              alt="de sol"
              projectTitle="Project Del Sol"
            />
            <AnimatedProjects
              src={towerDesktop}
              alt="tower"
              projectTitle="228B Tower"
            />
            <AnimatedProjects
              src={prototypeDesktop}
              alt="prototype"
              projectTitle="Le Prototype"
            />
          </div>
        </motion.div>

        <div className="relative mt-5  lg:hidden">
          <div className="relative flex flex-row ">
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

        <div className="relative mt-5 lg:hidden">
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

        <div className="relative mt-5 lg:hidden">
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

{
  /* <div className="relative">
          <img
            src={pm}
            alt="paramour-image"
            className="w-auto block lg:hidden h-auto pt-12"
          />
          <div className="px-14 bg-cover bg-center">
            <img
              src={paramourDesktop}
              alt="paramour-desktop"
              className=" pt-12 hidden lg:h-[calc(100vh-)] object-cover lg:block"
            />
            <Navigation />
          </div>

          <motion.div className="absolute inset-8 flex flex-col justify-center md:pl-8 lg:pl-48 lg:w-[650px]">
            <motion.h1
              animate={{ y: [-150, -20] }}
              transition={{
                type: "spring",
                bounce: 0.05,
                duration: 2,
                delay: 0.1,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              className="text-white text-8xl font-spartan font-bold md:pt-16"
            >
              Project Paramour
            </motion.h1>
            <motion.h1
              animate={{ y: [-150, -20] }}
              transition={{
                type: "spring",
                bounce: 0.05,
                duration: 2,
                delay: 0.1,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              className="text-white font-spartan font-medium text-lg"
            >
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </motion.h1>
            <PortfolioButton />
          </motion.div>
          
      </div> */
}
