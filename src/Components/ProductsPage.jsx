// ProductsPage.jsx
import React from 'react';
import "../Styles/ProductsPage.scss";
import { onephone } from '../Images';


const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Argon',
      description: 'A social + game distribution platform. Share, Communicate, Build on Argon',
      price: "Our Beta is now availbale on iOS",
     image: {onephone},
    },
    
  ];

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={onephone} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <div className="cta__container">
        <a href="https://testflight.apple.com/join/bjuA3HQs" target="_blank" rel="noopener noreferrer">
          <button type="submit" className="company__cta">
            Try Argon Now!
          </button>
        </a>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;