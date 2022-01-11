import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CardProducts from './Components/CardProducts';
import About from './Components/About';
import './index.css';

const App = () => (
  <body>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<CardProducts />} />
    </Routes>
  </body>
);

export default App;
