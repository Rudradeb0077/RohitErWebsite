import { Link } from "react-router-dom";

const StoryCard = ({ imgUrl, title, postBy, postDate }) => {
  return (
    <div className="text-white">
      <Link to="#">
        <div className="w-full h-[200px]">
          <img className="w-full h-full object-cover" src={imgUrl} alt="" />
        </div>
        <div className="py-5 px-5">
          <div>
            <ul className="flex text-[12px] space-x-2 text-[#a2afa2]">
              <li className="hover:text-[#e6ff00] transition-all duration-150">
                <Link to="#">CLASSIC</Link>
              </li>
              <span>/</span>
              <li className="hover:text-[#e6ff00] transition-all duration-150">
                <Link to="#">TEMPLATE</Link>
              </li>
              <span>/</span>
              <li className="hover:text-[#e6ff00] transition-all duration-150">
                <Link to="#">UNCATEGORISED</Link>
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-HelveticaBold py-3">{title}</h1>
          <div className="flex text-[12px] text-[#a2afa2] space-x-2">
            <span className="hover:text-[#e6ff00] transition-all duration-150">
              {postBy}
            </span>
            <span>/</span>
            <span className="cursor-auto">{postDate}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;
