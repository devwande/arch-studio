import { useInView, motion } from "framer-motion";
import React from "react";


  
  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

const AnimatedProjects = ({ src, alt, projectTitle }: any) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        className="relative"
        initial="hidden"
        // animate={isInView ? "visible" : {}}
        animate="visible"
        variants={itemVariants}
      >
        <img src={src} alt={alt} className="w-screen" />
        <div className="absolute inset-8 flex flex-col justify-end">
          <h1 className="text-white text-3xl font-spartan font-bold">
            {projectTitle}
          </h1>
          <h1 className="text-white text-lg font-spartan font-normal">
            View All Projects
          </h1>
        </div>
      </motion.div>
    </>
  );
};

export default AnimatedProjects;
