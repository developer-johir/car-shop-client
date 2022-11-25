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
          <h1 className="card-title text-3xl">{title}</h1>
          <h2><span className="font-semibold text-lg">Location:</span> {location}</h2>

          <div className="md:flex justify-between">
          <h3 className="text-lg"><span className="font-semibold">Resale_price:</span> <span className="text-red-600">${resale_price}</span></h3>
          <h4 className="text-lg"><span className="font-semibold">Original_price:</span> <span className="text-red-600">${original_price}</span></h4>
          </div>

          <div className="md:flex justify-between">
          <h5 className="text-lg"><span className="font-semibold">Used:</span> <span>{used}</span></h5>
          <h6 className="text-lg"><span className="font-semibold">Posted:</span> <span>{posted}</span></h6>
          </div>

          <h2 className="text-lg"><span className="font-semibold">Seller_name:</span> <span>{seller_name}</span></h2>
          <div className="card-actions justify-end">
          <button className="btn bg-blue-700 text-white rounded-lg border-none mt-5">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
