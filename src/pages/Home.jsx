import '../App.css';
import Poster from '../components/Poster/Poster';
import ForYou from '../components/ForYou/ForYou';
import Possibilities from '../components/Possibilities/Possibilities';
import Proposal from '../components/Proposal/Proposal';
import Modal from '../components/modal/modal';
import { useState } from 'react';

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [btnActive, setBtnActive] = useState(true);
 
    return <div className="App">
      {<Poster openModal={openModal} setOpenModal={setOpenModal} btnActive={btnActive} setBtnActive={setBtnActive} />}
      <ForYou openModal={openModal} setOpenModal={setOpenModal} btnActive={btnActive} setBtnActive={setBtnActive} />
      <Possibilities openModal={openModal} setOpenModal={setOpenModal} btnActive={btnActive} setBtnActive={setBtnActive} />
      <Proposal openModal={openModal} setOpenModal={setOpenModal} btnActive={btnActive} setBtnActive={setBtnActive} />
      {<Modal openModal={openModal} setOpenModal={setOpenModal} btnActive={btnActive} setBtnActive={setBtnActive} />}
    </div>
}

export default Home;