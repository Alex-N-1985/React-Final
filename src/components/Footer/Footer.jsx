import "./Footer.css";

import FooterItem from "./FooterItem";

import fLogo from "../../assets/images/logo_EdSpase_footer.svg"
import vkEmblem from "../../assets/images/VKEmblem.svg";
import telEmblem from "../../assets/images/TelegrEmblem.svg";

import footerItems from "../../assets/datas/footermenudata.json";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return <footer>
        <div className="footer__high">
            <NavLink to="/"><img className="footer__high-logo" src={fLogo} alt="" /></NavLink>
            <div className="footer__high-menu">
                {footerItems.map((item, index) => <FooterItem key={index} name={item.name} data={item.data} />) }
            </div>            
        </div>
        <div className="footer__low">
            <div className="footer__low-copyright">2022 Ed Space. Все права защищены</div>
            <div className="footer__low-socnetwork">
                <img src={vkEmblem} alt="" />
                <img src={telEmblem} alt="" />
            </div>
        </div>
    </footer>
}

export default Footer;