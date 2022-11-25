import React from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../../Products/Products/Products";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto pb-20">
      <div className="text-center">
      <h1 className="text-center text-3xl font-bold text-red-600 mt-14 mb-3">
        Second-hand Products
      </h1>
      <p>We welcome feedback: you can select the flag against a sentence to report it.</p>
      <img
        className="mx-auto mt-5 mb-10"
        src="https://i.ibb.co/Mp877Sg/separator-1.png"
        alt="separator-1"
      />
      </div>
      {categoryNews.map((product) => (
        <Products key={product._id} product={product}></Products>
      ))}
    </div>
  );
};

export default Category;
