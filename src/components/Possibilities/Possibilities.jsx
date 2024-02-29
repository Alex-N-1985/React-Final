import "./Possibilities.css";
import PosCards from "../../assets/datas/possibilities.json";
import PosCard from "../Poscard/Poscard";

import { MainContext } from "../../App";
import { useContext } from "react";

const Possibilities = () => {

    const { openModal, setOpenModal, btnActive, setBtnActive } = useContext(MainContext);

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
                name = {item.name}
                imgs = {`./images/Possibs/${item.image}`}
                title = {item.title}
                text = {item.text}
                />
                )}
        </div>
        <button className="btnTryFree" onClick={e => setOpenModal(true)} disabled={!btnActive} >ПОПРОБОВАТЬ БЕСПЛАТНО</button>
    </section>   
}

export default Possibilities;