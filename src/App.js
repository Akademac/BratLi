import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/pages/Products';
import Home from './components/pages/Home';
import GalleryPage from './components/pages/GalleryPage';
import SingleProduct from './components/pages/SingleProduct';
import Cart from './components/pages/Cart';
import CheckOutPage from './components/pages/CheckOutPage';


function App() {

  return (
    <div className="App" basename='/BratLi'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:forWhom' element={<Products />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckOutPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
