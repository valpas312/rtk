import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './components/Counter';

const Router = () => {
  return <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
  </>
}

export default Router