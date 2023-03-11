import FooterStyles from "./footer.module.css";

const Footer = ()=>{
    return(
        <footer>
            <div>
            <div>
           <span>Active Trending</span>
           <ul>
            <li><a href="/#">Men</a></li>
            <li><a href="/#">Women</a></li>
            <li><a href="/#">Kids</a></li>
           </ul>
            </div>
            <div>
            <span>About Us</span>
           <ul>
            <li><a href="/#">About Company</a></li>
            <li><a href="/#">Connect Us</a></li>
            <li><a href="/#">Our Branches</a></li>
           </ul>
            </div>
            </div>
           <span>Copyright © 2022 All Rights Reserved</span>
        </footer>
    )
}
export default Footer;