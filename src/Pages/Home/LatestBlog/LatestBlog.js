import React from "react";
import { FaCalendarAlt, FaUser, FaComment } from "react-icons/fa";

const LatestBlog = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-7">
      <div className="categor-title text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-3">Read our latest blog</h2>
        <h2 className="text-5xl font-bold mb-3">LATEST BLOG</h2>
        <p>
          Latest car news from all across the world on new car launches including major
          auto show, Car, cars and Car launch news.
        </p>
        <img
          className="mx-auto mt-5 mb-10"
          src="https://i.ibb.co/Mp877Sg/separator-1.png"
          alt="separator-1"
        />
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://carzone.dexignlab.com/xhtml/car-shop/images/blog/pic1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-red-600">Let’s Clear The Air About K...</h2>
            <div className="flex">
              <div className="flex items-center text-lg">
                <FaCalendarAlt></FaCalendarAlt>
              <p className="ml-1">27 Mar 2021</p>
              </div>
              <div className="flex items-center ml-3 text-lg">
                <FaUser></FaUser>
              <p className="ml-1">By Jone</p>
              </div>
              <div className="flex items-center ml-3 text-lg">
                <FaComment></FaComment>
              <p className="ml-1">83</p>
              </div>
            </div>
            <p className="text-[16px]">How long can you leave your car running with the air conditioner on before turning...</p>
            <div className="card-actions justify-start">
            <button className="btn bg-blue-700 text-white rounded-lg border-none mt-5">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://carzone.dexignlab.com/xhtml/car-shop/images/blog/pic1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-red-600">Let’s Clear The Air About K...</h2>
            <div className="flex">
              <div className="flex items-center text-lg">
                <FaCalendarAlt></FaCalendarAlt>
              <p className="ml-1">27 Mar 2021</p>
              </div>
              <div className="flex items-center ml-3 text-lg">
                <FaUser></FaUser>
              <p className="ml-1">By Jone</p>
              </div>
              <div className="flex items-center ml-3 text-lg">
                <FaComment></FaComment>
              <p className="ml-1">83</p>
              </div>
            </div>
            <p className="text-[16px]">How long can you leave your car running with the air conditioner on before turning...</p>
            <div className="card-actions justify-start">
            <button className="btn bg-blue-700 text-white rounded-lg border-none mt-5">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://carzone.dexignlab.com/xhtml/car-shop/images/blog/pic1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-red-600">Let’s Clear The Air About K...</h2>
            <div className="flex">
              <div className="flex items-center text-lg">
                <FaCalendarAlt></FaCalendarAlt>
              <p className="ml-1">27 Mar 2021</p>
              </div>
              <div className="flex items-center ml-3 text-lg">
                <FaUser></FaUser>
              <p className="ml-1">By Jone</p>
              </div>
              <div className="flex items-center ml-3 text-lg">
                <FaComment></FaComment>
              <p className="ml-1">83</p>
              </div>
            </div>
            <p className="text-[16px]">How long can you leave your car running with the air conditioner on before turning...</p>
            <div className="card-actions justify-start">
            <button className="btn bg-blue-700 text-white rounded-lg border-none mt-5">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
