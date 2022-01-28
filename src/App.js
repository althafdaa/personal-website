import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Contact from './Pages/Contact';

import Home from './Pages/Home';

function App() {
  return (
    <div className='object-contain md:px-32 lg:px-64 overflow-auto h-full flex flex-col bg-neutral-200'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
