import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SubCatagory from '../Banner/SubCatagory/SubCatagory';
import GallerySection from '../../GallerySection/GallerySection';

const Home = () => {

    const [toys, setToys] = useState([]);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    });


    return (
        <>
            <Banner></Banner>
         <div className='bg-sky-50 rounded-xl shadow-xl'>
         <h1 className='text-center text-6xl text-purple-500 font-semibold pt-5'>Gallery Section</h1>
            <hr />
            <div className='grid md:grid-cols-3 gap-1 ml-6 mt-20 pb-16 bg-sky-50'>
                {
                    toys?.map((toy)=> (
                        <GallerySection
                        toy={toy}
                        
                        ></GallerySection>
                    ))
                }
            
            </div>
         </div>
            <div className='mt-40'>
                <SubCatagory></SubCatagory>

            </div>
        </>
    );
};

export default Home;