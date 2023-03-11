import FooterStyles from "./footer.module.css";

const Footer = ()=>{
    return(
        <footer>
            <div>
            <div>
           <span>Active Trending</span>
           <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
           </ul>
            </div>
            <div>
            <span>About Us</span>
           <ul>
            <li>About Company</li>
            <li>Connect Us</li>
            <li>Our Branches</li>
           </ul>
            </div>
            </div>
           <span>Copyright © 2022 All Rights Reserved</span>
        </footer>
    )
}
export default Footer;