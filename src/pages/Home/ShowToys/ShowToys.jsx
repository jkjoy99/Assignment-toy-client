
import React, { useEffect, useState } from 'react';

const ShowToys = ({ toy }) => {
    const {
        name,
        details,
        photo,
        price,
        quantity,
        supplier,


    } = toy || {}

    return (
        <>
            
           <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name : {name}</h2>
                    <p>Product Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default ShowToys;