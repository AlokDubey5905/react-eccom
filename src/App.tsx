import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard';
import AddProduct from './views/addProduct';
import Description from './views/description';
import Cart from './views/cart';
import { ProductProvider } from './productContext';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/description/:productId" element={<Description />} />
            <Route path="/cart-list" element={<Cart />} />
          </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
