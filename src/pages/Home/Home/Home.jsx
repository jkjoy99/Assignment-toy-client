import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ShowToys from '../ShowToys/ShowToys';

const Home = () => {

    const [toys, setToys] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    });


    return (
        <>
            <Banner></Banner>
            <div>
                <h2>Show Toys product</h2>
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
        </>
    );
};

export default Home;