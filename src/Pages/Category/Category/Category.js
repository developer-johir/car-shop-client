import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import BookNowModal from "../../Products/BookNowModal/BookNowModal";
import Products from "../../Products/Products/Products";
import Spinner from "../../Spinner/Spinner";

const Category = () => {
  const {loading} = useContext(AuthContext);
  const categoryProduct = useLoaderData();
  const [car, setCar] = useState(null);

  if(loading){
    return <Spinner></Spinner>
}

  return (
    <div>
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
      {categoryProduct.map((product) => (
        <Products 
        key={product._id} 
        product={product}
        setCar={setCar}
        ></Products>
      ))}
    </div>
    {
      car &&
      <BookNowModal
      car={car}
      setCar={setCar}
      categoryProduct={categoryProduct}
     ></BookNowModal>
    }
    </div>
  );
};

export default Category;
