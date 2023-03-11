import NavbarStyles from "./navbar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import storeIcon from "../../assets/images/vuesax-bold-map.svg";
import { useEffect, useState } from "react";
const Navbar = ({ show, handleClose }) => {
  const [drawerWidth,setDrawerWidth] = useState(true);
  useEffect(()=>{
    let width = setTimeout(()=>{
      setDrawerWidth((previous)=> !previous)
    },0);
    return ()=> clearTimeout(width);
  },[show]);

  return (
    <nav className={`${show ? NavbarStyles.drawer : ""}`} style={{minWidth:drawerWidth?'291.250px':'0',maxWidth:drawerWidth?'80%':'0'}}>
      <ul className={`${show ? NavbarStyles["navigation-list"] : ""}`}>
        <li style={{display:show?'flex':'none'}}>
          <AiOutlineClose  className={NavbarStyles['drawer-close']} onClick={handleClose}/>
        </li>
        <li style={{display:show?'flex':'none'}}>
          {" "}
          <img
            src={storeIcon}
            alt="store_icon"
            style={{ width: "24px", height: "24px" }}
          />
          <span>Store Locator</span>
        </li>
        <li>Top Deals</li>
        <li>Deals of the Day</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>New</li>
        <li>Brands</li>
        <li>Sports</li>
        <li>Accessories</li>
        <li>Sale</li>
        <span style={{display:show?'flex':'none'}}>العربية</span>
      </ul>
    
    </nav>
  );
};
export default Navbar;
