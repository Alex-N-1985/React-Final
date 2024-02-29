import headLogo from "../../assets/images/logo_EdSpase.svg";
import langVector from "../../assets/images/Vector.svg";

import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return <header>
        <div className="hlogo"><NavLink to="/"><img src={headLogo} alt="" /></NavLink></div>
        <ul className="hmenu">
            <li><NavLink to="/possibs">Возможности</NavLink></li>
            <li><a href="">Стоимость</a></li>
            <li><a href="">Контакты</a></li>
        </ul>
        <div className="langsel">
            RU <img src={langVector} alt="" />            
        </div>
    </header>
}

export default Header;