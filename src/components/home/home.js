import Header from "../header/header";
import Slider from "../slider/slider";
import GenaricCategoriesBrands from "../genaric_categories_brands/genaric_categories_brands";
import GenaricSlide from "../genaric_Categories_brands_slides/genaricSlide";
import CategoryImageOne from "../../assets/images/dwlly-QG2xRapm1Kc-unsplash.jpg";
import CategorycImageTwo from "../../assets/images/alexander-andrews-X62F1WQhuLI-unsplash.jpg";
import CategoryImageThree from "../../assets/images/alice-donovan-rouse-z9F_yK4Nmf8-unsplash.jpg";
import CategoryImageFour from "../../assets/images/revolt-164_6wVEHfI-unsplash.jpg";
import brandImagesOne from "../../assets/images/jezael-melgoza-layMbSJ3YOE-unsplash.jpg";
import brandImagesTwo from "../../assets/images/cdd20-DQBSwt217zo-unsplash.jpg";
import brandImagesThree from "../../assets/images/jon-cellier-RUsVVa57VPI-unsplash.jpg";
import brandImagesFour from "../../assets/images/tamanna-rumee-9ROY8fXmTto-unsplash.jpg";
import FeaturedMostViewed from "../featured_mostViewed/featured_most_viewed";
import ShopNow from "../shop_now/shopNow";
import Footer from "../footer/footer";
const Home = () => {
  const categoriesEndpointsAPI = [
    "https://api-task.bit68.com/en/api/categories",
    "https://api-task.bit68.com/en/api/categories/?page=2"
  ];
  const brandsEndpointsApi = [
    "https://api-task.bit68.com/en/api/brands",
    "https://api-task.bit68.com/en/api/brands/?page=2"
  ];

  const categoriesImagesStyles = {
    "width":"100%",
    "objectFit":"cover",
    "objectPosition":"50% 50%"
  }
  const brandsImagesStyles = {
    "width":"60%",
    "objectFit":"contain",
    "objectPosition":"46% 42%"
  }
        
        const categoriesSlidesImagesArr = [
            {id:0,image:CategoryImageOne},
            {id:1,image:CategorycImageTwo},
            {id:2,image:CategoryImageThree},
            {id:3,image:CategoryImageFour},
        ]
        const brandsSlidesImagesArr = [
          {id:0,image:brandImagesOne},
          {id:1,image:brandImagesTwo},
          {id:2,image:brandImagesThree},
          {id:3,image:brandImagesFour},
        
        ]

    
    return (
    <>
      <Header />
      <Slider />
      <GenaricCategoriesBrands  apiEndpointsArr={categoriesEndpointsAPI} backgroundColor={"#FFFFFF"} headline="Main Categories" imageStyles={categoriesImagesStyles}/>
      <GenaricSlide  slidesImages={categoriesSlidesImagesArr} slideName="main-category"/>
      <GenaricCategoriesBrands  apiEndpointsArr={brandsEndpointsApi} backgroundColor={"#2D2F78"} headline="Popular Brands" imageStyles={brandsImagesStyles}/>
      <GenaricSlide  slidesImages={brandsSlidesImagesArr} slideName="brands"/>
      <FeaturedMostViewed headline={"Featured items"}/>
      <FeaturedMostViewed headline={"Most Viewed items"}/>
      <ShopNow/>
      <Footer/>
      
    </>
  );
};
export default Home;
