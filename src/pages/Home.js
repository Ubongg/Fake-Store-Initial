import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/main.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-row">
        <div className="home-col">
          <h1>
            treat yo' self to
            <br />
            something good
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <button>
            <Link to="/products">shop now</Link>
          </button>
        </div>
        <div className="home-col-img">
          <div className="home-img-bx">
            <img src={home} alt="home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
