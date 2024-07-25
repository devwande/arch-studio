
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ to, children }: any) => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ x: [100, 1] }}
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 2,
        delay: 0.1,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      className="relative text-lg font-bold hover:text-black"
      onClick={() => navigate(to)}
    >
      <span className="hover-underline">{children}</span>
      <style>{`
        .hover-underline::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -2px;
          height: 2px;
          width: 0;
          background-color: black;
          transition: width 0.3s;
        }
        .hover-underline:hover::after {
          width: 50%; /* Adjust this value to reduce the underline length */
        }
      `}</style>
    </motion.button>
  );
};

export default NavLink;