import '../App.css';
import Poster from '../components/Poster/Poster';
import ForYou from '../components/ForYou/ForYou';
import Possibilities from '../components/Possibilities/Possibilities';
import Proposal from '../components/Proposal/Proposal';
import Modal from '../components/modal/modal';
import { createContext, useState } from 'react';

export const MainContext = createContext({});

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [btnActive, setBtnActive] = useState(true);
 
    return <MainContext.Provider value={{openModal, setOpenModal, btnActive, setBtnActive}}>
      <div className="App">
        <Poster />
        <ForYou />
        <Possibilities />
        <Proposal />
        <Modal />
      </div>
    </MainContext.Provider>
}

export default Home;