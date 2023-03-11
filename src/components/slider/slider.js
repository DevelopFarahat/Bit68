import SliderStyles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

const Slider = () => {
  const [sliderImagesArr, setSliderImagesArr] = useState([]);
  useEffect(() => {
    let abortController;
    (async () => {
      abortController = new AbortController();
      let signal = abortController.signal;

      axios
        .get("https://api-task.bit68.com/en/api/slider_image", {
          signal: signal,
        })
        .then((slider) => {
          setSliderImagesArr(slider.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
    return () => abortController?.abort();
  }, []);

  return (
    <>
      <div className={SliderStyles.swiperContainer}>
        <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          className={SliderStyles.swiper}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,Pagination, Navigation]}
        >
          {sliderImagesArr?.map((sliderImg) => (
            <SwiperSlide
              className={SliderStyles.swiperSlide}
              key={sliderImg.id}
            >
              <img
                src={sliderImg.image}
                className={SliderStyles['slide-image']}
                alt={
                  sliderImg.image
                    .substr(sliderImg.image.lastIndexOf("/") + 1)
                    .split(".")[0]
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default Slider;
