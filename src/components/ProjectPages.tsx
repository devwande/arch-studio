import PortfolioButton from "./PortfolioButton";
import { motion } from "framer-motion";

const ProjectPages = ({ src, alt, title, content }: any) => {
  return (
    <>
      <div className="relative hidden lg:block">
        <div className="px-14 bg-cover bg-center">
          <img
            src={src}
            alt={alt}
            className=" pt-12 hidden lg:h-[calc(100vh-)] object-cover lg:block"
          />
        </div>

        <div className="absolute inset-8 flex flex-col justify-center md:pl-8 lg:pl-48 lg:w-[700px]">
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
            {title}
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
            {content}
          </motion.h1>
          <PortfolioButton />
        </div>
      </div>
    </>
  );
};

export default ProjectPages;
