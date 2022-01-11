import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './index.css';
import Loader from '../Loader';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);
  const ShowProduct = () => (
    <div className="product-content">
      <div>
        <img src={product.image} alt={product.title} height="400px" />
      </div>
      <div className="product-content-column">
        <h4 className="product-content-column-cat">{product.category}</h4>
        <h1 className="product-content-column-tittle">{product.title}</h1>
        <p className="product-content-column-desc">{product.description}</p>
        <p className="product-content-column-rat">
          Rating
          <div>{product.rating && product.rating.rate}</div>
        </p>
        <h3 className="product-content-column-price">${product.price}</h3>
      </div>
    </div>
  );
  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loader /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
