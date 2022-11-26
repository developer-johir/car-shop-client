import React from "react";

const BookNowModal = ({ car, setCar }) => {
  const { title, resale_price } = car;

  const handleBookNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const number = form.number.value;
    const location = form.location.value;

    const bookNow = {
        product: title,
        user: name,
        email,
        price,
        number,
        location
      };
    console.log(bookNow);
    setCar(null);
  };

  return (
    <div>
      <>
        <input type="checkbox" id="booknow-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative p-10">
            <label
              htmlFor="booknow-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-3xl text-center mb-8 font-bold">{title}</h3>

            <form onSubmit={handleBookNow} className="grid grid-cols-1 gap-3 mt-5">
              <input
                type="text"
                disabled
                placeholder="Full Name"
                name="name"
                className="input input-bordered w-full rounded-lg"
              />
              <input
                type="email"
                disabled
                placeholder="Email"
                name="email"
                className="input input-bordered w-full rounded-lg"
              />
              <input
                type="text"
                disabled
                placeholder="Price"
                name="price"
                value={resale_price}
                className="input input-bordered w-full rounded-lg"
              />
              <input
                type="number"
                placeholder="Phone Number"
                name="number"
                className="input input-bordered w-full rounded-lg"
              />
              <input
                type="text"
                placeholder="Meeting Location"
                name="location"
                className="input input-bordered w-full rounded-lg"
              />
              <br />
              <input
                className="btn bg-blue-700 text-white w-full -mt-4 rounded-lg"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default BookNowModal;
