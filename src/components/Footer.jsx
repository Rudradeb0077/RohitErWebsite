const Footer = () => {
  return (
    <div
      style={{ borderRadius: "0 0 16px 16px" }}
      className="z-10 bg-[#000000] w-full backdrop-blur-xl p-8 my-[6px] text-[#a2afa2] flex items-center justify-between"
    >
      <div>
        <p className="text-sm">Copyright 2023 - All right reserved</p>
      </div>
      <div>
        <ul className=" flex flex-wrap gap-x-6 gap-y-2 text-sm text-white">
          <li className="hover:text-[#e6ff00] transition-all duration-500">
            <a href="#">Facebook</a>
          </li>
          <li className="hover:text-[#e6ff00] transition-all duration-500">
            <a href="#">Twitter</a>
          </li>
          <li className="hover:text-[#e6ff00] transition-all duration-500">
            <a href="#">Instagram</a>
          </li>
          <li className="hover:text-[#e6ff00] transition-all duration-500">
            <a href="#">Dribble</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
