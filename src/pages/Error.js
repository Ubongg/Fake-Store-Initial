import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>you've reached a dead end</h1>
      <button>
        <Link to="/">back home</Link>
      </button>
    </div>
  );
};

export default Error;
