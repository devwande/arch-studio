import { useState } from "react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  return (
    <div className="hidden lg:block absolute bg-white font-spartan text-lg font-bold bottom-0 left-[-24px] w-">
      <button
        onClick={() => handleTabClick(1)}
        className={`p-5 w-[80px] ${
          activeTab === 1
            ? "bg-black text-white"
            : "bg-white text-gray  hover:bg-lightash"
        }`}
      >
        01
      </button>
      <button
        onClick={() => handleTabClick(2)}
        className={`p-5 w-[80px] ${
          activeTab === 2
            ? "bg-black text-white "
            : "bg-white text-gray  hover:bg-lightash"
        }`}
      >
        02
      </button>
      <button
        onClick={() => handleTabClick(3)}
        className={`p-5 w-[80px] ${
          activeTab === 3
            ? "bg-black text-white"
            : "bg-white text-gray  hover:bg-lightash"
        }`}
      >
        03
      </button>
      <button
        onClick={() => handleTabClick(4)}
        className={`p-5 w-[80px] ${
          activeTab === 4
            ? "bg-black text-white"
            : "bg-white text-gray  hover:bg-lightash"
        }`}
      >
        04
      </button>
    </div>
  );
};

export default Navigation;
