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
      loop
    >
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/assets/mainslide01.jpg`} alt="슬라이드1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/assets/mainslide02.jpg`} alt="슬라이드2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/assets/mainslide03.jpg`} alt="슬라이드3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/assets/mainslide04.jpg`} alt="슬라이드4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/assets/mainslide05.jpg`} alt="슬라이드5" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
