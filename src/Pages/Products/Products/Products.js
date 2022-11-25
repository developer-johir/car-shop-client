import React from "react";

const Products = ({ product }) => {
  const { image, title, location, resale_price, original_price, used, posted, seller_name } = product;
  return (
    <div className="mt-10">
      <div className="card lg:card-side bg-base-100 shadow-2xl w-3/4 mx-auto">
        <figure>
          <img className="f lg:w-96 h-full" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <h2>Location: {location}</h2>
          <h3>Resale_price: ${resale_price}</h3>
          <h4>Original_price: ${original_price}</h4>
          <h5>years of use: {used}</h5>
          <h6>Time to post: {posted}</h6>
          <h2>Seller_name: {seller_name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
