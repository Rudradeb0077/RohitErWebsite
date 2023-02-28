import { CgWebsite } from "react-icons/cg";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaChess } from "react-icons/fa";
import { ImCamera } from "react-icons/im";
import { BiNetworkChart } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";

const Services = () => {
  return (
    <div className="py-10">
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff]">
          What I do
        </span>
        <div className="h-[4px] w-[110px] bg-[#e6ff00]">{/* underline */}</div>
      </div>
      <div className="text-white py-10">
        <div className="grid grid-cols-3 gap-y-10">
          <div className="flex items-center justify-start space-x-10 text-lg">
            <CgWebsite size={70} />
            <p className="w-28">Websites and Platforms</p>
          </div>
          <div className="flex items-center justify-start space-x-10 text-lg">
            <HiOutlineDevicePhoneMobile size={70} />
            <p className="w-28">Mobile Aplications</p>
          </div>
          <div className="flex items-center justify-start space-x-10 text-lg">
            <FaChess size={70} />
            <p className="w-28">Strategy and Branding</p>
          </div>
          <div className="flex items-center justify-start space-x-10 text-lg">
            <ImCamera size={70} />
            <p className="w-28">Product Photography</p>
          </div>
          <div className="flex items-center justify-start space-x-10 text-lg">
            <BiNetworkChart size={70} />
            <p className="w-28">Seo Optimisation</p>
          </div>
          <div className="flex items-center justify-start space-x-10 text-lg">
            <MdManageAccounts size={70} />
            <p className="w-28">Social Media Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
