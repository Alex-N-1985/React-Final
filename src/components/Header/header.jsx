import headLogo from "../../assets/images/logo_EdSpase.svg";
import langVector from "../../assets/images/Vector.svg";

import "./header.css";

const Header = () => {
    return <header>
        <div className="hlogo"><img src={headLogo} alt="" /></div>
        <ul className="hmenu">
            <li><a href="">Возможности</a></li>
            <li><a href="">Стоимость</a></li>
            <li><a href="">Контакты</a></li>
        </ul>
        <div className="langsel">
            RU <img src={langVector} alt="" />            
        </div>
    </header>
}

export default Header;