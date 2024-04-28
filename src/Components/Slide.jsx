import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = () => {
  const img_1 = "/images/blog_detail_monoliza-5.webp";
  const img_2 = "/images/blog05_770x.webp";
  const img_3 = "/images/blog_detail_monoliza-5.webp";
  const img_4 = "/images/oil_Oainting_11.png";
  const img_5 = "/images/blog06_770x.webp";
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            className="w-full h-[400px] lg:h-[700px]"
            src={img_1}
            alt="slider_1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] lg:h-[700px]"
            src={img_2}
            alt="slider_2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] lg:h-[700px]"
            src={img_3}
            alt="slider_3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] lg:h-[700px]"
            src={img_4}
            alt="slider_4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] lg:h-[700px]"
            src={img_5}
            alt="slider_5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
