import './App.css';
import {Route, Routes} from 'react-router';
import Home from './pages/Home';


import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Possibs from './pages/Possibs';

function App() {
  return <div className='page'>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/possibs" element={<Possibs/>} />
    </Routes>
    <Footer/>
  </div>;
}

export default App;
