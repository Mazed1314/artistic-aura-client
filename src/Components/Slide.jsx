import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = () => {
  const img_1 =
    "/images/ai-generated-ai-generative-watercolor-oil-paint-drawing-sketch-art-canvas-of-color-bright-tree-forest-nature-decoration-poster-background-graphic-art-photo.jpg";
  const img_2 = "/images/blog_detail_monoliza-5.webp";
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
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img className="w-full h-[400px] md:h-[800px]" src={img_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] md:h-[800px]"
            src="https://images.joseartgallery.com/content/7245_1680041580/11.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[400px] md:h-[800px]"
            src="https://images.joseartgallery.com/100736/what-kind-of-art-is-popular-right-now.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px] md:h-[800px]" src={img_1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
