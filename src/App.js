import './App.css';
import {Route, Routes} from 'react-router';
import { createContext, useState } from 'react';
import Home from './pages/Home';

import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Possibs from './pages/Possibs';
import Possib from './pages/Possib';
import WeatherPage from './pages/Weatherpage';

export const MainContext = createContext({});

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [btnActive, setBtnActive] = useState(true);

  return <MainContext.Provider value={{openModal, setOpenModal, btnActive, setBtnActive}}>
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/possibs" element={<Possibs/>} />
        <Route path='/possib/:name' element={<Possib/>} />
        <Route path='/weather' element={<WeatherPage/>} />
      </Routes>
      <Footer/>
    </div>
  </MainContext.Provider>
}

export default App;
