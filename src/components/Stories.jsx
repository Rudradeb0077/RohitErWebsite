import stories from "../collection/stories";

import StoryCard from "../common/StoryCard";

const Stories = () => {
  return (
    <div>
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff]">Stories</span>
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
      <div className="w-full grid grid-cols-3 gap-16 py-10">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            imgUrl={story.imgUrl}
            title={story.title}
            postBy={story.postBy}
            postDate={story.postDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
