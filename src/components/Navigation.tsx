import { useState } from "react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  return (
    <>
    <div className="hidden lg:block absolute bg-white font-spartan text-lg font-bold bottom-0 left-[-24px] w-">
      <button
      key={1}
        onClick={() => handleTabClick(1)}
        className={`p-5 w-[80px] ${
          activeTab === 1
            ? "bg-black text-white "
            : "bg-white text-gray  hover:bg-lightash"
        }`}
      >
        01
      </button>
      <button
      key={2}
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
      key={3}
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
      key={4}
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
    </>
  );
};

export default Navigation;

// import { FC } from "react";

// interface NavigationProps {
//   activeTab: number;
//   handleTabClick: (index: number) => void;
// }

// const Navigation: FC<NavigationProps> = ({ activeTab, handleTabClick }) => {
//   return (
//     <div className="hidden lg:block absolute bg-white font-spartan text-lg font-bold bottom-0 left-[-24px]">
//       {[1, 2, 3, 4].map((tab) => (
//         <button
//           key={tab}
//           onClick={() => handleTabClick(tab)}
//           className={`p-5 w-[80px] ${
//             activeTab === tab
//               ? "bg-black text-white"
//               : "bg-white text-gray hover:bg-lightash"
//           }`}
//         >
//           {`0${tab}`}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Navigation;