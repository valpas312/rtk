import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './components/Counter';
import Products from './pages/Products';
import Navbar from './components/Navbar';

const Router = () => {
  return <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/products" element={<Products/>} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
  </>
}

export default Router