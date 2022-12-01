import React from "react";
import useFetch from "../../hooks/useFetch";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import Button from "../Button/button";
import { RiStarSFill } from "react-icons/ri";

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
            <>
              <SwiperSlide key={e?.id} className="relative">
                <img src={`http://image.tmdb.org/t/p/w500/${e?.poster_path}`} />
              </SwiperSlide>
              <Button
                className={
                  "text-yellow-500 absolute right-5 top-7 px-1 py-1 rounded-full bg-white"
                }
                onClick={() => handleFav(movie)}
                text={<RiStarSFill className="text-3xl" />}
              />
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
