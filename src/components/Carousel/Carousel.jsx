import React from "react";
import useFetch from "../../hooks/useFetch";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { isMobile } from "react-device-detect";

const Carousel = ({ url, slides }) => {
  const { data } = useFetch(url);

  const handleFav = (data) => {
    addToFavs(data);
  };

  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={slides}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.results.map((e) => {
          return (
            <SwiperSlide key={e?.id} className="relative">
              {isMobile ? (
                <img src={`http://image.tmdb.org/t/p/w500/${e?.poster_path}`} />
              ) : (
                <img
                  src={`http://image.tmdb.org/t/p/w500/${e?.backdrop_path}`}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
