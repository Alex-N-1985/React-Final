import './App.css';
import {Route, Routes} from 'react-router';
import Home from './pages/Home';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';

function App() {
  return <div className='page'>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Footer/>
  </div>;
}

export default App;
