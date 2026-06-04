import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import Products from './Screen/Products/Products';
import Footer from './Component/Footer/Footer';
import Cart from './Screen/Cart/Cart';
import ProductDetails from './Screen/ProductDetails/ProductDetails';

import Auth from './Screen/Auth/Auth';

import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );

 
  if (!isLoggedIn) {
    return <Auth setIsLoggedIn={setIsLoggedIn} />
  }

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;