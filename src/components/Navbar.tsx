import { useState, useEffect, useRef } from "react";
import arch from "../assets/arch.svg";
import group from "../assets/group.svg";


const Navbar: React.FC = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuToggled) {
        setIsMenuToggled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuToggled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuToggled]);

  return (
    <>
      <div className="flex justify-between my-8 mx-8 relative md:hidden">
        <img src={arch} alt="arch" />
        <button
          ref={buttonRef}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img src={group} alt="group" />
        </button>
      </div>

      {isMenuToggled && (
        <div
          ref={menuRef}
          className="space-y-4 flex flex-col fixed top-26 right-0 w-[343px] bg-lightash py-10 z-10"
        >
          <button className="flex justify-start pl-8 text-3xl font-spartan font-bold">
            Portfolio
          </button>
          <button className="flex justify-start pl-8 text-3xl font-spartan font-bold">
            About Us
          </button>
          <button className="flex justify-start pl-8 text-3xl font-spartan font-bold">
            Contact
          </button>
        </div>
      )}

      <div className="hidden md:flex md:flex-col md:items-start">
        <div className="flex justify-between w-full px-2 pt-12">
          <img src={arch} alt="arch image" className="pl-32 " />
          <div className="hidden md:flex md:space-x-16 md:mr-28">
            <button className="text-gray font-spartan text-lg font-bold">Portfolio</button>
            <button className="text-gray font-spartan text-lg font-bold">About Us</button>
            <button className="text-gray font-spartan text-lg font-bold">Contact</button>
          </div>
        </div>

        

        
      </div>
    </>
  );
};

export default Navbar;
