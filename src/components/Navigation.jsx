import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`${
        nav ? "z-50" : ""
      } absolute h-full w-full top-0 left-0 py-16 px-32 `}
    >
      <div
        className={`${
          nav ? "opacity-100" : "opacity-0"
        } absolute h-full w-full top-0 left-0 bg-[#0000008d] transition-all duration-300`}
      ></div>
      <div className="h-full w-full p-12 flex flex-col items-end justify-start">
        <div
          className={`${
            nav ? "rotate-90" : "rotate-0"
          } h-14 w-14 rounded-full bg-[#e6ff00] sticky top-10 flex items-center justify-center cursor-pointer transition-all duration-300 z-50`}
          onClick={handleNav}
        >
          {nav ? <IoClose size={30} /> : <CgMenuRight size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
