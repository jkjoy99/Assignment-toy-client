import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ShowToys from '../ShowToys/ShowToys';
import Test from '../Banner/Test';

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
                <Test></Test>

            </div>
        </>
    );
};

export default Home;