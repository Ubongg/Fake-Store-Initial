import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";

const url = "https://fakestoreapi.com/products";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(url);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const filterProducts = (category) => {
    const newItems = data.filter((item) => item.category === category);
    setFilter(newItems);
  };

  return (
    <div className="content">
      <div className="products-title">
        <h2 className="products-title-text">Our Products</h2>
        <div className="products-underline"></div>
      </div>
      <div className="buttons">
        <button onClick={() => setFilter(data)}>all</button>
        <button onClick={() => filterProducts("men's clothing")}>
          men's clothing
        </button>
        <button onClick={() => filterProducts("jewelery")}>jewelery</button>
        <button onClick={() => filterProducts("electronics")}>
          electronics
        </button>
        <button onClick={() => filterProducts("women's clothing")}>
          women's clothing
        </button>
      </div>
      <div className="box">
        {filter.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
