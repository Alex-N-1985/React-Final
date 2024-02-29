import { useParams } from "react-router";
import "../App.css";
import possibs from "../assets/datas/possibilities.json";
import Possibpage from './../components/Possibpage/Possibpage';

const Possib = () => {

    const {name} = useParams();
    const Poss = possibs.filter(item => item.name === name);
    console.log(Poss);
    return <Possibpage 
        title = {Poss[0].title}
        text = {Poss[0].mtext}
        image = {Poss[0].mimage}
    />
}

export default Possib;