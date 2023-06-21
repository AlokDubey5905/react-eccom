import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../product';

const DescriptionView: React.FC = () => {
  
  
  const params = useParams<any>();
  const productId = params.productId;

  // Find the selected product based on the product ID
  const selectedProduct = productsData.find((product) => product.id.toString() === productId);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Description View</h1>
      <h2>{selectedProduct.title}</h2>
      <p>{selectedProduct.description}</p>
    </div>
  );
};

export default DescriptionView;
