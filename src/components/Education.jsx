import education from "../collection/education";

const Education = () => {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center flex-col mb-20 relative">
        <span className="py-2 px-5 bg-white rounded-full text-lg">
          🎓 Education
        </span>
        <div
          style={{ height: `calc(${(education.length - 1) * 270}px)` }}
          className={` w-[1px] bg-[#e6ff00] absolute top-11`}
        />
      </div>
      <div className="flex flex-col -space-y-10 items-start px-10">
        {education.map((e) => (
          <>
            <div
              className={`${
                e.id % 2 ? "" : "self-end"
              } w-[500px] bg-[#f6fad016] text-[#a2afa2] px-10 py-12 rounded-xl relative`}
              key={e.id}
            >
              <div
                className={`${
                  e.id % 2 ? "invisible" : ""
                } inline-block w-[52px] absolute left-[-52px] `}
              >
                <div className="h-4 w-4 rounded-full bg-[#e6ff00]" />
                <div className="border-[15px] border-solid border-transparent border-r-[#f6fad016] relative -top-5" />
              </div>
              <span className="text-sm text-[#e6ff00]">{e.duration}</span>
              <p className="text-white text-xl font-HelveticaBold mb-5">
                {e.institute}
              </p>
              <p>{e.message}</p>
              <div
                className={`${
                  e.id % 2 ? "" : "invisible"
                } inline-flex w-[52px] absolute -right-[52px] top-10 justify-between`}
              >
                <div className="border-[15px] border-solid border-transparent border-l-[#f6fad016] " />
                <div className="h-4 w-4 rounded-full bg-[#e6ff00] relative top-2" />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Education;
