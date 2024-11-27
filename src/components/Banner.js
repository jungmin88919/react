import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src="/assets/mainslide01.jpg" alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/mainslide02.jpg" alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/mainslide03.jpg" alt="Banner 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/mainslide04.jpg" alt="Banner 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/mainslide05.jpg" alt="Banner 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
