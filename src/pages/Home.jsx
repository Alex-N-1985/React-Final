import '../App.css';
import Poster from '../components/Poster/Poster';
import ForYou from '../components/ForYou/ForYou';
import Possibilities from '../components/Possibilities/Possibilities';
import Proposal from '../components/Proposal/Proposal';
import Modal from '../components/modal/modal';

const Home = () => {    
 
    return <div className="App">
      <Poster />
      <ForYou />
      <Possibilities />
      <Proposal />
      <div className="poster__elipse"></div>
      <div className="Possib__elipse-purple"></div>
      <div className="Possib__elipse-accent"></div>
      <Modal />
    </div>
}

export default Home;