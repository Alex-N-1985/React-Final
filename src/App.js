import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Poster from './components/Poster/Poster';
import ForYou from './components/ForYou/ForYou';

function App() {
  return (
    <div className="App">
      <Header/>
      <Poster/>
      <ForYou/>
      <Footer/>
    </div>
  );
}

export default App;
