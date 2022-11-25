import React from "react";

const LatestBlog = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20">
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
            <h2 className="card-title text-red-600">Let’s Clear The Air About K...</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-start">
            <button className="btn bg-blue-700 text-white rounded-lg border-none mt-5">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://carzone.dexignlab.com/xhtml/car-shop/images/blog/pic2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://carzone.dexignlab.com/xhtml/car-shop/images/blog/pic3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
