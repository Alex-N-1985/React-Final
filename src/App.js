import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Poster from './components/Poster/Poster';
import ForYou from './components/ForYou/ForYou';
import Possibilities from './components/Possibilities/Possibilities';
import Proposal from './components/Proposal/Proposal';

function App() {
  return (
    <div className="App">
      <Header/>
      <Poster/>
      <ForYou/>
      <Possibilities/>
      <Proposal/>
      <Footer/>
    </div>
  );
}

export default App;
