import { Link } from "react-router-dom";

import {
  IoLogoBitcoin,
  IoLogoPaypal,
  IoLogoPlaystation,
} from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff]">
          Get in Touch
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
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="w-full"
              height="406"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Champadanga&t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full flex py-8">
        <div className="w-[50%] flex flex-col items-start justify-between text-white">
          <div>
            <p className="text-[#a2afa2] mb-8">Write me</p>
            <div className="text-xl hover:text-[#e6ff00] transition-all duration-500">
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
          </div>
          <div>
            <p className="text-[#a2afa2] mb-8">My Office</p>
            <div className="text-xl hover:text-[#e6ff00] transition-all duration-500">
              <p className="w-[400px]">
                1444 S. Alameda Street Los Angeles, California 90021
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#a2afa2] mb-8">Follow us</p>
            <div className="text-xl">
              <ul className="w-[400px] flex flex-wrap gap-x-6 gap-y-2">
                <li className="hover:text-[#e6ff00] transition-all duration-500">
                  <a href="#">Facebook.</a>
                </li>
                <li className="hover:text-[#e6ff00] transition-all duration-500">
                  <a href="#">Twitter.</a>
                </li>
                <li className="hover:text-[#e6ff00] transition-all duration-500">
                  <a href="#">Behance.</a>
                </li>
                <li className="hover:text-[#e6ff00] transition-all duration-500">
                  <a href="#">Dribble.</a>
                </li>
                <li className="hover:text-[#e6ff00] transition-all duration-500">
                  <a href="#">Instagram.</a>
                </li>
                <li className="hover:text-[#e6ff00] transition-all duration-500">
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <p className="text-[#a2afa2] mb-8">Or fill this form</p>
          <div className="py-3">
            <input
              className="bg-transparent placeholder:text-white placeholder:text-xl px-2 outline-none text-white text-xl w-full border-b-[1px] border-[#f6fad04a] focus:border-[#fff] transition-all duration-300 pb-3 mb-3"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="py-3">
            <input
              className="bg-transparent placeholder:text-white placeholder:text-xl px-2 outline-none text-white text-xl w-full border-b-[1px] border-[#f6fad04a] focus:border-[#fff] transition-all duration-300 pb-3 mb-3"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="py-3">
            <input
              className="bg-transparent placeholder:text-white placeholder:text-xl px-2 outline-none text-white text-xl w-full border-b-[1px] border-[#f6fad04a] focus:border-[#fff] transition-all duration-300 pb-3 mb-3"
              type="text"
              placeholder="Company"
            />
          </div>
          <div className="py-3">
            <textarea
              className="bg-transparent placeholder:text-white placeholder:text-xl px-2 outline-none text-white text-xl resize-none w-full h-20 overflow-hidden border-b-[1px] border-[#f6fad04a] focus:border-[#fff] transition-all duration-300 pb-3 mb-3"
              type="text"
              placeholder="Name"
            />
          </div>
          <button className="bg-white px-6 py-2 rounded-full text-sm">
            Send
          </button>
        </div>
      </div>
      <div className="mt-10 mb-5 h-[0.1px] bg-[#e5ff0032]" />
      <div className="text-white py-10">
        <div className="overflow-hidden relative w-auto">
          <div
            style={{ width: `calc(${150 * 28}px)` }}
            className="flex animate-[scroll_10s_linear_infinite] w-full items-center justify-between text-white"
          >
            <div className="w-[150px]">
              <IoLogoBitcoin size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoPaypal size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoPlaystation size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoBitcoin size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoPaypal size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoPlaystation size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoBitcoin size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoPaypal size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoPlaystation size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoBitcoin size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoPaypal size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoPlaystation size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoBitcoin size={50} color="#fff" />
            </div>
            <div className="w-[150px]">
              <IoLogoPaypal size={50} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
