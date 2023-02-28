import testimonials from "../collection/testimonials";
import { MdOutlineFormatQuote } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div>
      <div>
        <span className="font-HelveticaBold text-2xl text-[#fff]">
          What The People Saying
        </span>
        <div className="h-[4px] w-[280px] bg-[#e6ff00]">{/* underline */}</div>
      </div>
      <div className="text-white py-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide className="pb-16 cursor-grab" key={t.id}>
              <div className="flex space-x-5">
                <div>
                  <MdOutlineFormatQuote
                    size={50}
                    className=" mt-[-5px] text-[#e6ff00]"
                  />
                </div>
                <div>
                  <p className="text-[#a2afa2] text-[1rem] leading-6">
                    {t.message}
                  </p>
                  <div className="my-5 h-[0.1px] bg-[#e5ff0032]" />
                  <div className="flex items-center justify-start space-x-5">
                    <img
                      className="h-12 w-12 rounded-[50%]"
                      src={t.imgUrl}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="font-HelveticaBold">{t.name}</span>
                      <span className="text-xs font-HelveticaBold text-[#a2afa2]">
                        {t.profession}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
