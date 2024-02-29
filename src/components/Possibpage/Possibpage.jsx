import "./Possibpage.css";
import { NavLink } from 'react-router-dom';

const Possibpage = ({title, text, image}) => {
    return <div className="posibpage">
        <p><NavLink to={`/`}>На главную</NavLink></p>
        <h3>{title}</h3>
        <img src={`../images/Possibs/${image}`} alt="" />
        <p>{text}</p>
    </div>
}

export default Possibpage;