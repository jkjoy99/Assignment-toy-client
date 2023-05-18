import React from 'react';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img5 from '../../../assets/img5.jpg'
import img4 from '../../../assets/img4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-3/6">
        <div id="slide1" className="carousel-item relative w-full h-3/6">
          <img src={img1} className="w-full h-3/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-3/6">
          <img src={img2} className="w-full h-3/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-3/6">
          <img src={img5} className="w-full h-3/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full h-3/6">
          <img src={img4} className="w-full h-3/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a> 
          </div>
        </div>
      </div>
    );
};

export default Banner;