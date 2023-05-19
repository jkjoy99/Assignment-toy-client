
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

            <div className="card w-96  bg-indigo-200 shadow-xl rounded-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl pt-4 h-80 bg-base-100 shadow-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Toy Name : {name}</h2>
                    <p className='card-title'>Price :${price}</p>
                    <h2 className="card-title">Toy Quantity : {quantity}</h2>
                    <h2 className="card-title">Toy supplier : {supplier}</h2>
                    <h2 className="card-title">Toy Details : {details}</h2>

                    <div className="card-actions">
                        <button className="btn btn-primary mt-4">Vew Derails</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShowToys;