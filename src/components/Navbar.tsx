import { useEffect, useRef } from "react";
import arch from "../assets/arch.svg";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

const Navbar: React.FC = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileNav) {
        toggleMobileNav();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        toggleMobileNav();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNav]);

  return (
    <>
      <div className="flex justify-between my-8 mx-8 relative md:hidden">
        <img src={arch} alt="arch" />
        <nav className=" ">
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            ref={buttonRef}
            onClick={() => toggleMobileNav()}
            className="container w-full flex flex-col space-y-1.5 p-4 px-4"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              className="w-7 h-0.5 bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-7 h-0.5 bg-black block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              className="w-7 h-0.5 bg-black block"
            ></motion.span>
          </motion.button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
          >
            <motion.div
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.099,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "100%", //equivalent of translate-x-100%
                  transition: {
                    type: "spring",
                    bounce: 0.099,
                    when: "afterChildren",
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              ref={menuRef}
              className="md:hidden space-y-12 h-1/3 flex flex-col fixed top-26 right-0 w-5/6 bg-lightash py-10 z-10"
            >
              <motion.button
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="flex justify-start pl-8 text-3xl font-spartan font-bold"
              >
                Portfolio
              </motion.button>
              <motion.button
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="flex justify-start pl-8 text-3xl font-spartan font-bold"
              >
                About Us
              </motion.button>
              <motion.button
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="flex justify-start pl-8 text-3xl font-spartan font-bold"
              >
                Contact
              </motion.button>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>

      <motion.div className="hidden md:flex md:flex-col md:items-start">
        <div className="flex justify-between w-full px-2 pt-12">
          <motion.img animate={{ x: [100, 1] }}
             transition={{
               type: "spring",
               bounce: 0.05,
               duration: 2,
               delay: 0.1,
               ease: [0.5, 0.71, 1, 1.5],
             }} src={arch} alt="arch image" className="pl-24 lg:pl-44" />
          <div className="hidden md:flex md:space-x-16 md:mr-36 lg:mr-[730px] text-gray font-spartan text-lg font-bold">
            <motion.button
             animate={{ x: [100, 1] }}
             transition={{
               type: "spring",
               bounce: 0.05,
               duration: 2,
               delay: 0.1,
               ease: [0.5, 0.71, 1, 1.5],
             }}
              className="lg:hover:text-black"
            >
              Portfolio
            </motion.button>
            <motion.button animate={{ x: [100, 1] }}
             transition={{
               type: "spring",
               bounce: 0.05,
               duration: 2,
               delay: 0.1,
               ease: [0.5, 0.71, 1, 1.5],
             }} className="lg:hover:text-black whitespace-nowrap">
              About Us
            </motion.button>
            <motion.button animate={{ x: [100, 1] }}
             transition={{
               type: "spring",
               bounce: 0.05,
               duration: 2,
               delay: 0.1,
               ease: [0.5, 0.71, 1, 1.5],
             }} className="lg:hover:text-black">
              Contact
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
