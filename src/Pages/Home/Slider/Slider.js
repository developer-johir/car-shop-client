import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <div className="carousel max-w-screen-xl mx-auto h-[700px]">
  <div id="slide1" className="carousel-item relative w-full slider-img">
    <div className='carousel-item relative w-full slider-img'>
    <img src="https://carzone.dexignlab.com/xhtml/car-shop/images/main-slider/slide2.jpg" className="w-full" alt='' />
    </div>
    <div className="slider-text absolute transform top-1/3 left-16">
        <h2 className="text-3xl lg:text-6xl font-bold text-red-600 mb-4">CAR SHOP !
        </h2>
        <h2 className="text-2xl lg:text-5xl font-bold text-white mt-3">
        GET ALL YOU NEED EASILY
        </h2>
        <p className='text-white mt-5 lg:text-lg'>We have all types of Vehicle sell and provides the best in a class vehicle. Our <br /> Vehicle grades are very high and our customer gets best </p>
        <button className="btn bg-blue-700 text-white rounded-lg border-none mt-5">Read More</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full slider-img">
  <div className='carousel-item relative w-full slider-img'>
  <img src="https://carzone.dexignlab.com/xhtml/car-shop/images/main-slider/slide1.jpg" className="w-full" alt=''/>
    </div>
    <div className="slider-text absolute transform top-1/3 left-16">
        <h2 className="text-3xl lg:text-6xl font-bold text-red-600 mb-4">CAR SHOP !
        </h2>
        <h2 className="text-2xl lg:text-5xl font-bold text-white mt-3">
        GET ALL YOU NEED EASILY
        </h2>
        <p className='text-white mt-5 lg:text-lg'>We have all types of Vehicle sell and provides the best in a class vehicle. Our <br /> Vehicle grades are very high and our customer gets best </p>
        <button className="btn bg-blue-700 text-white rounded-lg border-none mt-5">Read More</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full slider-img">
  <div className='carousel-item relative w-full slider-img'>
  <img src="https://carzone.dexignlab.com/xhtml/car-shop/images/main-slider/slide1.jpg" className="w-full" alt=''/>
    </div>
    <div className="slider-text absolute transform top-1/3 left-16">
        <h2 className="text-3xl lg:text-6xl font-bold text-red-600 mb-4">CAR SHOP !
        </h2>
        <h2 className="text-2xl lg:text-5xl font-bold text-white mt-3">
        GET ALL YOU NEED EASILY
        </h2>
        <p className='text-white mt-5 lg:text-lg'>We have all types of Vehicle sell and provides the best in a class vehicle. Our <br /> Vehicle grades are very high and our customer gets best </p>
        <button className="btn bg-blue-700 text-white rounded-lg border-none mt-5">Read More</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3  top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;