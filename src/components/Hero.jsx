import { Link } from "react-router-dom";

import { BiCalendar } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import ReactWhatsapp from "react-whatsapp";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="w-full ">
      <div className="flex items-center space-x-10">
        <div className="relative">
          <div
            style={{ WebkitBorderRadius: "15px 157px 15px" }}
            className="bg-[#e6ff00] w-[270px] h-[450px] overflow-hidden"
          >
            <img
              className="h-full w-full object-cover"
              src="/img/profile.jpg"
              alt=""
            />
          </div>
          <div className="bg-[#ffffff] leading-3 w-[13rem] flex items-center justify-center py-6 rounded-full font-medium absolute bottom-0">
            <ul className="flex items-center space-x-4">
              <li className="hover:text-[#7d7d7d] transition-all duration-200">
                <a href="#" target="_blank">
                  Fb.
                </a>
              </li>
              <li className="hover:text-[#7d7d7d] transition-all duration-200">
                <a href="#" target="_blank">
                  Tw.
                </a>
              </li>
              <li className="hover:text-[#7d7d7d] transition-all duration-200">
                <a href="#" target="_blank">
                  Ins.
                </a>
              </li>
              <li className="hover:text-[#7d7d7d] transition-all duration-200">
                <a href="#" target="_blank">
                  Drb.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div>
            <p className="text-lg text-white">
              Hello Everyone <span className="text-2xl">👋</span>
            </p>
            <h1 className="pt-4 pb-8 text-[3rem] leading-[1.2] text-white">
              I'm Rohit Patra <br />I am a{" "}
              <span className="text-[#e6ff00]">
                <Typewriter
                  words={["developer.", "designer.", "manager."]}
                  loop={Infinity}
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursor
                  cursorBlinking={false}
                />
              </span>
            </h1>
          </div>
          <hr className="border-[1px] w-full border-[#e5ff0032]" />
          <div className="flex items-center justify-start flex-wrap text-lg mt-5 leading-[3rem] text-[#fff]">
            <div className="flex items-center mr-28 space-x-2 justify-center">
              <BiCalendar size={24} className="text-[#e6ff00]" />
              <span>01.06.2002</span>
            </div>
            <div className="flex items-center mr-28 space-x-2 justify-center">
              <FaWhatsapp size={24} className="text-[#e6ff00]" />
              <ReactWhatsapp number="+916297522799">
                +91 6297522799
              </ReactWhatsapp>
            </div>
            <div className="flex items-center mr-28 space-x-2 justify-center">
              <span className="text-[1.65rem] text-[#e6ff00]">&#64;</span>
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:example@gmail.com";
                  e.preventDefault();
                }}
              >
                example@gmail.com
              </Link>
            </div>
            <div className="flex items-center mr-28 space-x-2 justify-center">
              <MdLocationOn size={24} className="text-[#e6ff00]" />
              <span>Kolkata,India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <p className="text-[#a2afa2] text-xl leading-9">
          I'm a Creative Developer for interactive projects that usually are
          apps, VR and Creative websites. I Spend most of time coding
          outstanding projects or studying new technologies. to improve my
          development stack. I develop compelling designs that spring to life
          using transition and animations that suit my clients, using the most
          sophisticated technologies available today for fully interactive and
          responsive websites and apps.
        </p>
      </div>
    </div>
  );
};

export default Hero;
