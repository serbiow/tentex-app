import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Represented from '../pages/Represented/Represented';
import Products from '../pages/Products/Products';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/represented" element={<Represented />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default AppRoutes;
