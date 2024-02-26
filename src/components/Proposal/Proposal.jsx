import "./Proposal.css";
import tagData from "../../assets/datas/tagdata.json";
import Tag from './../Tag/Tag';

const Proposal = () => {

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
    </section>
}

export default Proposal;