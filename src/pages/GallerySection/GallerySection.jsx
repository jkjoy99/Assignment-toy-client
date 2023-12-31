import React from 'react';

const GallerySection = ({ toy }) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100" data-aos="fade-up" data-aos-duration="2000">
                <figure className='w-full h-96 '><img src={toy.image} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default GallerySection;