import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SingleProduct = () => {
  const { addCart } = useGlobalContext();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setData(data);
          setError(null);
        });
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, []);

  const { title, image, price, description } = data;

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      {data && (
        <div className="single-product">
          <Link to="/products" className="back-btn">
            back to products
          </Link>
          <div className="section">
            <div className="col">
              <div className="single-img-bx">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="col">
              <h2>{title}</h2>
              <h3>${price}</h3>
              <p>{description}</p>
              <button onClick={() => addCart(data)}>add to cart</button>
              <Link className="to-cart" to="/cart">
                go to cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
