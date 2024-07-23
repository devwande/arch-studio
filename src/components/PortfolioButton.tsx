import { motion } from "framer-motion";
import arrow from "../assets/arrow.svg";

const PortfolioButton = () => {
  return (
    <>
      <div>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          className="border flex font-spartan mt-12 font-bold border-black bg-black text-white px-7 py-5 hover:bg-gray hover:border-gray"
        >
          See our Portfolio {""}
          <img
            src={arrow}
            alt="arrow button"
            className="ml-5 transition-transform group-hover:-rotate-45 group-active:-rotate-12"
          />
        </motion.button>
      </div>
    </>
  );
};

export default PortfolioButton;
