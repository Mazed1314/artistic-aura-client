import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = () => {
  const img_1 = "/images/grid01_f082623b-bb96-43a2-811f-854fbc047902.webp";
  const img_2 = "/images/blog05_770x.webp";
  const img_3 = "/images/blog_detail_monoliza-5.webp";
  // const img_4 = "/images/oil_Oainting_11.png";
  const img_5 = "/images/daniele-fasoli-sNQMXw8wT5U-unsplash.jpg";
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[400px] lg:h-[700px] flex flex-col md:flex-row bg-transparent">
            <div className="md:w-8/12 flex justify-center items-center">
              <img
                src={img_1}
                className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] rounded-full"
              />
            </div>
            <div className="md:w-4/12 my-auto p-2 mx-4">
              <h1 className="text-2xl text-center text-pink-400 lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                Color Your World with Artistic Aura's Creative Energy
              </h1>
              <p className="py-6 text-lg hidden lg:block text-center">
                Immerse yourself in a vibrant spectrum of artistic energy and
                inspiration. Artistic Aura is your gateway to a world where
                colors come alive and creativity knows no bounds.
              </p>
            </div>
          </div>
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
            alt="slider_4"
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            className="w-full h-[400px] lg:h-[700px]"
            src={img_4}
            alt="slider_4"
          />
        </SwiperSlide> */}
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
