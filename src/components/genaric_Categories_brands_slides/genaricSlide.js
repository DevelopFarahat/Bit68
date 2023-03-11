import GenaricSlideStyles from "./genaricSlide.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
const GenaricSlide = ({slidesImages,slideName})=>{
    
    return(
        <div className={GenaricSlideStyles.slidesContainer}>
               <Swiper
          className={GenaricSlideStyles.swiper}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[ Pagination, Navigation]}
        >
          {slidesImages?.map((sliderImg) => (
            <SwiperSlide key={sliderImg.id} className={GenaricSlideStyles.swiperSlides} >
              <img
                src={sliderImg.image}
                style={{objectFit:slideName === 'main-category'?'revert':'cover'}}
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
    )
}
export default GenaricSlide;