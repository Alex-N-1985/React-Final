import "./Footer.css";

const FooterItem = ({name, data}) => {
    return <div className="footer__high-item">
        <h3>{name}</h3>
        <ul>
            {data.map((item, index) => <li key={index}><a href="">{item}</a></li>)}
        </ul>        
    </div>
}

export default FooterItem;