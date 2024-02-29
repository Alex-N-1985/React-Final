import { useParams } from "react-router";
import "../App.css";
import possibs from "../assets/datas/possibilities.json";

const Possib = () => {

    const {name} = useParams();
    const Poss = possibs.filter(item => item.name === name);

    console.log(Poss);

    return <div className="posibpage">
        <h2>{Poss[0].title}</h2>
        <img src={Poss[0].image} alt="" />
        <p>{Poss[0].text}</p>
    </div>
}

export default Possib;