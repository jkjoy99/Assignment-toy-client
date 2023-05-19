import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowToys from '../Home/ShowToys/ShowToys';

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div>
            <h2>This is All Toys : {toys.length}</h2>
         <div className='grid md:grid-cols-3 gap-4'>
         {
                    toys?.map((toy) => (
                        <ShowToys
                         toy={toy}
                         key={toy._id}
                        >
                            
                        </ShowToys>
                    ))
                }
         </div>
        </div>
    );
};

export default AllToys;