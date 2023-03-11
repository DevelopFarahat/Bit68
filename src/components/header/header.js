import HeaderStyles from "./header.module.css";
import storeIcon from "../../assets/images/vuesax-bold-map.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import DrawerIcon from "../../assets/images/vuesax-linear-menu.svg";
import React, { useState } from 'react';
import Navbar from "../navbar/navbar"
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
    document.body.style.overflow = "auto";
  } 
  const handleShow = () =>{
    setShow(true);
    document.body.style.overflow = "hidden";
  } 
  return (
    <>
      <div className={HeaderStyles.announcement}>
        <span>White Friday Sales Up To 70% Off</span>
      </div>
      <header>
        <div>
          <img
            src={storeIcon}
            alt="store_icon"
            style={{ width: "24px", height: "24px" }}
          />
          <span>Store Locator</span>
        </div>
        <div>
          <section>
            <input type="text" name="search" placeholder="Search" />
            <AiOutlineSearch
              className={HeaderStyles.serachIcon}
              style={{ width: "24px", height: "24px" }}
            />
          </section>
        </div>
        <div>
          <div className={HeaderStyles.DrawerIconContainer}>
            <img
              src={DrawerIcon}
              alt={DrawerIcon.substr(DrawerIcon.lastIndexOf("/")+1).split(".")[0]}
              onClick={handleShow}
             />
          </div>
          <div>
            <span>العربية</span>
            <BsPersonFill style={{ width: "24px", height: "24px" }} />
            <div className={HeaderStyles.cartIconContainer} style={{paddingTop:'6px'}}> <FaCartPlus className={HeaderStyles.cartIcon} /></div>
           
          </div>
        </div>
      </header>
      <div className={HeaderStyles.backdrop} style={{display:show?'flex':'none'}}></div>
      <Navbar show={show} handleClose={handleClose}/>
    </>
  );
};
export default Header;
