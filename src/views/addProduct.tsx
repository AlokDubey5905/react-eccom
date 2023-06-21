import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../productContext';

const AddProductView = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: '',
    rating: 0.0,
    category: '',
    price: 0,
    description: '',
    image: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...product,
    };

    addProduct(newProduct); // Add the new product to the product context

    setProduct({ // Reset the form fields
      title: '',
      rating: 0.0,
      category: '',
      price: 0,
      description: '',
      image: ''
    });

    navigate('/'); // Redirect to the Dashboard page
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="rating"
          value={product.rating}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          value={product.category}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={product.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="imageurl"
          placeholder="ImageUrl"
          value={product.image}
          onChange={handleInputChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductView;
