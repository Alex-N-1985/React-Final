import "./Proposal.css";
import tagData from "../../assets/datas/tagdata.json";
import propCardData from "../../assets/datas/propcarddata.json";
import ilustration from "../../assets/images/ilustration_2.png";
import Tag from './../Tag/Tag';
import PropCard from "./PropCard";

import { MainContext } from "../../App";
import { useContext } from "react";

const Proposal = () => {

    const { openModal, setOpenModal, btnActive, setBtnActive } = useContext(MainContext);

    let n = tagData.length;
    const arr = [];
    for (let i = 0; i < n; i++){
        arr.push(tagData[i].title);        
    }

    return <section className="proposal">
        <h2>Выбирайте Ed Space сегодня и вы получите</h2>
        <div className="tags">
            {arr.map((item, index) => <Tag value={item} key={index}/>)}
        </div>
        <div className="proposal__startschool">
            <h3>Запустите свою онлайн-школу</h3>
            <p className="proposal__startschool-p">Или разверните корпоративный учебный портал уже сегодня.</p>
            <h4>Цена 250 рублей за 1 ученика в месяц</h4>
            <p className="proposal__startschool-p1">Все готово для запуска. Попробуйте 7-дневный демо-доступ.</p>
            <button onClick={e => setOpenModal(true)} disabled={!btnActive} >ПОПРОБОВАТЬ БЕСПЛАТНО</button>
        </div>
        <div className="proposal__foryou">
            <div className="proposal__foryou-container">
                <h3>Точно подойдет для:</h3>
                {propCardData.map((item, index) => 
                    <PropCard key={index} name={item.name} text={item.text} />
                )}
            </div>
            <img src={ilustration} alt="" />
        </div>

    </section>
}

export default Proposal;