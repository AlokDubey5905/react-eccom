import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import productsData from '../product';
import { ProductContext } from '../productContext';
import { CartContext } from './cartContext';

// Styled Card component
const Productcard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display:flex;
  flex-direction:row;
  column-gap:10px;
`;

// Styled Title component
const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
`;

// Styled Description component
const Price = styled.p`
  margin-bottom: 16px;
  max-width:300px
`;

const Rating = styled.p`
  margin-bottom: 16px;
  max-width:300px
`;

const Image = styled.img`
  width: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const Productdetails = styled.div`
display:flex;
flex-direction:column;
`;

const DashboardView: React.FC = () => {

  const { products, addToCart } = useContext(ProductContext);

  const navigate = useNavigate();

  // const { addToCart } = useContext(CartContext);

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div>
      <h1>Dashboard View</h1>
      <button onClick={handleAddProduct}>Add Product</button>
      {productsData.map((product: { id: number; title: string; price:number; rating: number; image:string}) => (
        <Productcard key={product.id}>
          <Productdetails>
            <Title><Link to={`/description/${product.id}`}>{product.title}</Link></Title>
            <Price>Price: ${product.price}</Price>
            <Rating>Rating: {product.rating}⭐</Rating>
          </Productdetails>
          <Image src={product.image}></Image>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </Productcard>
      ))}
    </div>
  );
};

export default DashboardView;
