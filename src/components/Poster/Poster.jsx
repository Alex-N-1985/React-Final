import "./Poster.css";

import postImg from "../../assets/images/ilustration_1.png";

const Poster = () => {
    return <aside>
        <div className="poster">
            <h2>Ed Space Ваши знания и экспертность обретут здесь форму</h2>
            <p>Мощный инструмент для организации обучения. Ваши ученики будут в восторге!</p>
            <button>ПОПРОБОВАТЬ БЕСПЛАТНО</button>
        </div>
        <img src={postImg} alt="" />
        <div className="poster__elipse"></div>
    </aside>
}

export default Poster;