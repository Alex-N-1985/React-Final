import "./Poster.css";

import { MainContext } from "../../App";
import { useContext } from "react";

import postImg from "../../assets/images/ilustration_1.png";

const Poster = () => {

    const { openModal, setOpenModal, btnActive, setBtnActive } = useContext(MainContext);

    return <aside>
        <div className="poster">
            <h2>Ed Space Ваши знания и экспертность обретут здесь форму</h2>
            <p>Мощный инструмент для организации обучения. Ваши ученики будут в восторге!</p>
            <button onClick={e => setOpenModal(true)} disabled={!btnActive} >ПОПРОБОВАТЬ БЕСПЛАТНО</button>
        </div>
        <img src={postImg} alt="" />
        {/* <div className="poster__elipse"></div> */}
    </aside>
}

export default Poster;