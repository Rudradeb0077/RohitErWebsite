import { useState } from "react";

const PortfolioCard = ({ title, tag, imgUrl }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#">
        <div>
          <img src={imgUrl} alt="" />
        </div>
        <div
          className={`${
            isHovering
              ? "bg-[#00000068] space-y-3 opacity-100"
              : "opacity-0 space-y-10"
          } absolute h-full w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center  text-white  transition-all duration-300`}
        >
          <span
            className={`${
              isHovering ? "translate-y-0" : "-translate-y-3"
            } text-[#a2afa2] text-sm transition-all duration-300 delay-100`}
          >
            {tag}
          </span>
          <span
            className={`${
              isHovering ? "translate-y-0" : "translate-y-5"
            }text-xl font-HelveticaBold transition-all duration-300 delay-100`}
          >
            {title}
          </span>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;
