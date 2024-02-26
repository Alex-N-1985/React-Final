import "./Possibilities.css";
import PosCards from "../../assets/datas/possibilities.json";
import PosCard from "../Poscard/Poscard";

const Possibilities = () => {

    const cardData = [];
    let n = PosCards.length;
    for (let i = 0; i < n; i++){
        cardData.push(PosCards[i]);
    }

    return <section className="Possibil">
        <h2>Возможности Ed Space</h2>
        <p>Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка.</p>
        <div className="poscards__container">
                {cardData.map((item, index) => <PosCard 
                key = {index}
                imgs = {item.image}
                title = {item.title}
                text = {item.text}
                />
                )}
        </div>
        <button className="btnTryFree">ПОПРОБОВАТЬ БЕСПЛАТНО</button>
        <div className="Possib__elipse-purple"></div>
        <div className="Possib__elipse-accent"></div>
    </section>   
}

export default Possibilities;