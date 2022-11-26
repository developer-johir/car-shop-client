import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-96 px-8 py-14 shadow-2xl rounded-lg">
        <h1 className="text-4xl text-center mb-8">Login</h1>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full rounded-lg"
            />
            <label className="label mt-4">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full rounded-lg"
            />
            <label className="label cursor-pointer mt-4">
              <span className="label-text">Remember me</span>
              <input type="checkbox" className="toggle" checked />
            </label>
            <select className="select select-bordered w-full rounded-lg mt-4">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
