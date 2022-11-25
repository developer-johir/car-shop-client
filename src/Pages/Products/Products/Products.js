import React from "react";

const Products = ({ product }) => {
  const { title, image } = product;
  return (
    <div className="mb-10">
      {/* <h1>{title}</h1>
            <img className='mx-auto mt-5 mb-10' src={image} alt="separator-1"/> */}

      {/* <div className="card lg:card-side bg-base-100 shadow-2xl w-3/4 mx-auto">
        <figure>
          <img className="s w-80" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div> */}

      <div className="card lg:card-side bg-base-100 shadow-2xl w-3/4 mx-auto">
        <figure>
          <img className="f lg:w-96" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
