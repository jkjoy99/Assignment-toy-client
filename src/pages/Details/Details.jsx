import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import webTitle from '../WebTitle/WebTitle';

const Details = () => {
    webTitle('Details')
    const detail =useLoaderData();
    const  {
        name,
        details,
        photo,
        price,
        quantity,
        supplier,
        _id,
        category


    } = detail || {}
    return (
       <div className=''>
         <div className="card w-96  mx-auto bg-indigo-200 shadow-xl rounded-xl ">
        <figure className="px-10 pt-10">
            <img src={photo} alt="Shoes" className="rounded-xl pt-4 h-80 bg-base-100 shadow-xl " />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Toy Name : {name}</h2>
            <p className='card-title'>Price :${price}</p>
            <h2 className="card-title">Toy Quantity : {quantity}</h2>
            <h2 className="card-title">Toy supplier : {supplier}</h2>
            <h2 className="card-title">Toy Category : {category}</h2>
            <h2 className="card-title">Toy Details : {details}</h2>
            <h2 className="card-title ">Rating: <FaStar/> <FaStar/> <FaStarHalfAlt/>  <FaStarHalfAlt/> </h2>

            <div className="card-actions">
               <Link to='/alltoys'>
               <button className="btn btn-primary mt-4">Back All Toys</button>
               </Link>
            </div>
        </div>
    </div>
       </div>
    );
};

export default Details;