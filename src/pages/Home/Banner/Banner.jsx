import React from 'react';




const Banner = () => {
  return (
    <div className="carousel w-full h-2/5 mt-20 ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src='https://img.freepik.com/free-photo/two-friends-doing-science-experiments-with-robotic-car_23-2148778943.jpg?w=740&t=st=1684429527~exp=1684430127~hmac=cd23ba07c4caac0e1814a2c70e786ed824b5d04f5730e9ec3485f922b651ecd6' className="w-full [height:80%]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img src="https://img.freepik.com/free-photo/plenty-school-supplies_23-2147654490.jpg?w=740&t=st=1684430330~exp=1684430930~hmac=e65f49d29eebed7ce12c9fb8d26981d04e33bc9802b94971c56a7bf84e4ea25d" className="w-full [height:80%]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <img src="https://img.freepik.com/free-photo/robot-style-car-with-joystick_140725-9003.jpg?w=740&t=st=1684430384~exp=1684430984~hmac=12343441c4207e8ebd982fe73c8d35f751ba2efaccab5dd8146c78b8af0a9517" className="w-full [height:80%]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img src="https://img.freepik.com/free-photo/front-view-young-male-desk-trying-fix-little-house-layout-purple-wall_179666-26967.jpg?w=740&t=st=1684430445~exp=1684431045~hmac=a913ade1e3e4f20edcaa5e72da94706b58f8903b67de9cc38072bc3dc7dd58a2" className="w-full [height:80%]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;