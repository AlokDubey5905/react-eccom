// ProductContext.tsx
import React, { createContext, useState } from 'react';

export interface Product {
  id: number;
  title: string;
  category: string;
  ratings: number;
  price: number;
}

interface CartContextValue {
  cart: Product[];
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextValue>({
  cart: [],
  addToCart: () => {},
});

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      category: 'Electronics',
      ratings: 4.5,
      price: 19.99,
    },
    {
      id: 2,
      title: 'Product 2',
      category: 'Clothing',
      ratings: 3.8,
      price: 29.99,
    },
    // Add more dummy products here
  ]);

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
