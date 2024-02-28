import "./ForYou.css";

import cardData from "../../assets/datas/foryoudata.json";
import FYCard from "../FYCard/FYCard";

const ForYou = ({
    setOpenModal,
    openModal,
    setBtnActive,
    btnActive
}) => {
    return <section className="foryou">
        <h2>Точно подойдет для:</h2>
        <div className="foryou__container">
            {cardData.map((item, index) => <FYCard key={index} name={item.name} text={item.text} image={item.image} />)}
        </div>
        <button onClick={e => setOpenModal(true)} disabled={!btnActive} >ПОПРОБОВАТЬ БЕСПЛАТНО</button>
    </section>   
}

export default ForYou;