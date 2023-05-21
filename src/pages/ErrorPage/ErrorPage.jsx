import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg">
      <img
        className="m-auto"
        src="https://i.ibb.co/Wn5h7td/preview.jpg"
        alt=""
      />
      <Link to="/">
        <button className="text-4xl font-bold text-white btn border-0  bg-slate-800 m-auto block my-2 text-center">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
