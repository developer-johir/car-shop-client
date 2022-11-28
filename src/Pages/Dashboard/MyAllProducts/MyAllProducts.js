import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAllProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `https://car-shop-server-developer-johir.vercel.app/product?email=${user?.email}`;

  const { data: product = [] } = useQuery({
    queryKey: ["product", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="pl-20">
      <h1 className="text-3xl py-5">My All Products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>All</th>
              <th>Name</th>
              <th>location</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((booking, i) => (
              <tr className="hover" key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.product}</td>
                <td>{booking.location}</td>
                <td>{booking.price}</td>
                {/* <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-green-500">Paid</span>
                    )}
                  </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAllProducts;
