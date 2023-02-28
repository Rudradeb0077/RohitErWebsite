import { useState } from "react";
import { portfolios, headings } from "../collection/portfolios";
import PortfolioCard from "../common/PortfolioCard";

const Portfolio = () => {
  const [activePLink, setActivePLink] = useState(1);

  const handleActivePLink = (id) => {
    setActivePLink(id);
  };

  return (
    <div>
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff]">
          Portfolio
        </span>
        <div className="relative">
          <div className="my-5 h-[0.1px] bg-[#e5ff0032]" />
          <div className="px-3 absolute -top-[15px] left-1">
            <span className="h-1 w-3 bg-[#e6ff00] mx-[-3px] -rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#e6ff00] mx-[-3px] rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#e6ff00] mx-[-3px] -rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#e6ff00] mx-[-3px] rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#e6ff00] mx-[-3px] -rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#e6ff00] mx-[-3px] rotate-45 inline-block"></span>
            <span className="h-1 w-3 bg-[#e6ff00] mx-[-3px] -rotate-45 inline-block"></span>
          </div>
        </div>
      </div>
      <div className="py-10">
        <ul className="flex text-white space-x-12">
          {headings.map((h) => (
            <li className="cursor-pointer" key={h.id}>
              <span
                onClick={() => handleActivePLink(h.id)}
                className={`${
                  h.id === activePLink && "text-[#e6ff00] cursor-pointer"
                } `}
              >
                {h.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full grid grid-cols-3 gap-5 py-5">
        {activePLink === 1
          ? portfolios.map((p) => (
              <PortfolioCard
                key={p.id}
                title={p.title}
                tag={p.tag}
                imgUrl={p.imgUrl}
              />
            ))
          : portfolios
              .filter((p) => p.tag === headings[activePLink - 1].title)
              .map((p) => (
                <PortfolioCard
                  key={p.id}
                  title={p.title}
                  tag={p.tag}
                  imgUrl={p.imgUrl}
                />
              ))}
      </div>
    </div>
  );
};

export default Portfolio;
