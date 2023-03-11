import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "./swiper-scroll.css";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import FeaturesMostViewedStyles from "./featured_mostViewed.module.css";
import { useEffect, useState } from "react";
const FeaturedMostViewed = ({ headline }) => {
  const [itemsArr, setItemsArr] = useState([]);
  const itemsApiEndpoints = [
    "https://api-task.bit68.com/en/api/items",
    "https://api-task.bit68.com/en/api/items/?page=2",
    "https://api-task.bit68.com/en/api/items/?page=3",
  ];
  useEffect(() => {
    let abortController;
    abortController = new AbortController();
    (async () => {
      let signal = abortController.signal;
      const requests = itemsApiEndpoints.map((url) =>
        axios.get(url, { signal: signal })
      );
      axios.all(requests).then((responses) => {
        responses.forEach((resp) => {
          setItemsArr((previous) => [...previous, ...resp.data.results]);
        });
      });
    })();
    return () => abortController?.abort();
  }, []);
  return (
    <div className={FeaturesMostViewedStyles.mainContainer}>
      <span>{headline}</span>
      <Swiper
        scrollbar={{
          hide: false,
          dragSize: "auto",
          draggable: true,
          horizontalClass: `${FeaturesMostViewedStyles["swiper-scrollbar-horizontal"]}`,
        }}
        modules={[Scrollbar]}
        className={FeaturesMostViewedStyles.swiper}
      >
        {itemsArr.map((item) => (
          <SwiperSlide
            key={item.id}
            className={FeaturesMostViewedStyles["swiper-slide"]}
          >
            <img
              src={item.image}
              alt={
                item.image.substr(item.image.lastIndexOf("/") + 1).split(".")[0]
              }
            />
            <div>
              <span>{item.name}</span>
              <span
                style={{
                  color:
                    item.price_after_sale < item.price_before_sale
                      ? "#BA0829"
                      : "#2D2F7D",
                }}
              >
                EGP {item.price_after_sale}
                {item.price_after_sale < item.price_before_sale ? (
                  <span>
                    {" "}
                    save{" "}
                    {Number.parseFloat(item.price_before_sale) -
                      Number.parseFloat(item.price_after_sale)}
                  </span>
                ) : null}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default FeaturedMostViewed;
