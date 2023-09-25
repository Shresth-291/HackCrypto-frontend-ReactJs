import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Exchanges from './components/Exchanges';
import CoinsDetails from './components/CoinsDetails';
import Coins from './components/Coins';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exchanges' element={<Exchanges />}/>
        <Route path='/coins' element={<Coins />}/>
        <Route path='/coins/:id' element={<CoinsDetails />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
