import "./Poscard.css";
import { NavLink } from 'react-router-dom';

const PosCard = ({name, imgs, title, text}) => {

    return <div className="poscard">
        <NavLink to={`/possib/${name}`}><img src={imgs} alt="" /></NavLink>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
}

export default PosCard;