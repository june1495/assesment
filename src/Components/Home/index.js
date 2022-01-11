/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unstable-nested-components */

import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Loader from '../Loader';
import './index.css';

const Home = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const ShowProducts = () => (
    <>
      {filter.map((product) => {
        const Completionist = () => <div>Sorry, but our time is up ! </div>;
        const renderer = ({ hours, minutes, seconds, completed }) => {
          if (completed) {
            return <Completionist />;
          }
          // Render a countdown
          return (
            <div className="span-boton">
              {hours > 9 ? hours : `0${hours}`}:
              {minutes > 9 ? minutes : `0${minutes}`}:
              {seconds > 9 ? seconds : `0${seconds}`}
              <a href={`/product/${product.id}`} className="btn-detail">
                Go to Detail
              </a>
            </div>
          );
        };

        return (
          <div className="box" key={product.id}>
            <div className="imgBx">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="text">
              <h3>{product.title.substring(0, 12)}</h3>
              <p>${product.price}.</p>
              <Countdown
                date={Date.now() + Math.floor(Math.random() * (300000 + 1))}
                renderer={renderer}
              />
            </div>
          </div>
        );
      })}
    </>
  );

  return (
    <div>
      <section className="cards" id="">
        <div className="content">{loading ? <Loader /> : <ShowProducts />}</div>
      </section>
    </div>
  );
};

export default Home;
