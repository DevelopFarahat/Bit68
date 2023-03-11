import ShopeNowStyles from "./shopNow.module.css";
import ShopeOne from "../../assets/images/Screenshot 2022-11-21 at 8.45.01 PM.png";
import ShopeTwo from "../../assets/images/Screenshot 2022-11-21 at 8.45.19 PM.png";
const ShopNow = ()=>{
    return(
        <div className={ShopeNowStyles.shopNow}>
            <div>
                <img src={ShopeOne} alt={ShopeOne.substr(ShopeOne.lastIndexOf("/")+1).split(".")[0]}/>
            </div>
            <div>
            <img src={ShopeTwo} alt={ShopeTwo.substr(ShopeTwo.lastIndexOf("/")+1).split(".")[0]}/>
            </div>
        </div>
    )
}
export default ShopNow;