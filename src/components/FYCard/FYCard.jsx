import "./FYCard.css";

const FYCard = ({name, text, image}) => {
    return <article>
        <img src={"./images/ForYou/"+ image} alt="" />
        <div className="foryou__content">
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    </article>
}

export default FYCard;