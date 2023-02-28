const CirculerProgress = ({ name, level, circleWidth }) => {
  const radius = 70;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * level) / 100;
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="relative">
        <div>
          <svg
            width={circleWidth}
            height={circleWidth}
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}
          >
            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth="8px"
              r={radius}
              className="fill-none stroke-[#000]"
            />
            <circle
              cx={circleWidth / 2}
              cy={circleWidth / 2}
              strokeWidth="8px"
              r={radius}
              className="fill-none stroke-[#e6ff00]"
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
              }}
              transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
            />
          </svg>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-HelveticaBold">
          {level}
          <span className="text-xs ml-[1px]">%</span>
        </div>
      </div>
      <div className="font-HelveticaBold mt-3">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default CirculerProgress;
