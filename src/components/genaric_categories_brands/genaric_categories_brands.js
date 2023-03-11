import categoriesBrandsStyles from "./genaric_categories_brands.module.css";
import "./swiper-styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



import { useEffect, useState } from "react";
import axios from "axios";

const GenaricCategoriesBrands = ({ apiEndpointsArr,backgroundColor,imageStyles,headline }) => {
  const [mainSlidesArr, setMainSlidesArr] = useState([]);
  useEffect(() => {
    let abortController;
    abortController = new AbortController();
    (async () => {
      let signal = abortController.signal;
      const requests = apiEndpointsArr.map((url) =>
        axios.get(url, { signal: signal })
      );
      axios.all(requests).then((responses) => {
        responses.forEach((resp) => {
          setMainSlidesArr((previous) => [
            ...previous,
            ...resp.data.results,
          ]);
        });
      });
    })();
    return () => abortController?.abort();
  }, []);
  return (
    <div className={categoriesBrandsStyles.mainCategoriesContainer}>
      <span>{headline}</span>
      <div className={categoriesBrandsStyles.mainCategoriesSlider}>
        <Swiper
         freeMode={true}
          slidesPerView={6}
          spaceBetween={110}
          navigation={true}
          modules={[Navigation,FreeMode]}
          className={`${categoriesBrandsStyles["mySwiper"]} ${categoriesBrandsStyles.swiper} test`}
        >
          {mainSlidesArr.map((item) => (
            <SwiperSlide
              key={item.id}
              className={categoriesBrandsStyles["swiper-slide"]}
            >
              <div  style={{background:backgroundColor}}>
              <img
                src={item.image}
                style={imageStyles}
                alt={
                  item.image
                    .substr(item.image.lastIndexOf("/") + 1)
                    .split(".")[0]
                }
              />
              </div>
              {item.name === undefined?<span>Up to 40%</span>: <span>{item?.name}</span>}
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default GenaricCategoriesBrands;
