import React from "react";
import { isMobile } from "react-device-detect";
import useFetch from "../../hooks/useFetch";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

const Carousel = () => {
  const baseUrl = `https://api.themoviedb.org/3/trending/all/day?api_key={API_KEY}`;
  const { data } = useFetch(baseUrl);
  let device = isMobile ? 1 : 3;

  return isMobile ? (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={device}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.results.map((e) => {
          return (
            <SwiperSlide key={e?.id}>
              <img src={`http://image.tmdb.org/t/p/w500/${e?.poster_path}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  ) : (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={device}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.results.map((e) => {
          return (
            <SwiperSlide key={e?.id}>
              <img src={`http://image.tmdb.org/t/p/w500/${e?.poster_path}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
