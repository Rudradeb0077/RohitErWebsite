const LinearProgress = ({ name, level }) => {
  return (
    <div className="">
      <div className="text-sm font-HelveticaBold flex items-center justify-between py-5">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-1 rounded-full bg-[#dfdfdf]">
        <div
          className={`h-full bg-[#e6ff00] rounded-full`}
          style={{ width: `calc(${level}%)` }}
        />
      </div>
    </div>
  );
};

export default LinearProgress;
