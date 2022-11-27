import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError("");
        createUser(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            toast("User Created Successfully");
            const userInfo = {
              displayName: data.name,
            };
            updateUser(userInfo)
              .then(() => {
                // saveUser(data.name, data.email);
              })
              .catch((err) => console.log(err));
          })
          .catch((error) => {
            console.log(error);
            setSignUpError(error.message);
          });
      };
    return (
        <div className="flex justify-center items-center py-20">
      <div className="w-96 px-8 py-14 shadow-2xl rounded-lg">
        <h1 className="text-4xl text-center mb-8">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
          <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Your Name is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.name && (
                <p className="text-red-500" role="alert">
                  {errors.name?.message}
                </p>
              )}
            <label className="label mt-2">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full rounded-lg max-w-xs"
            />
            {errors.email && <p className="text-red-500" role="alert">{errors.email?.message}</p>}
            <label className="label mt-2">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required", minLength: {value: 6, message: "Password must be 6 characters of longer"} })}
              className="input input-bordered w-full rounded-lg max-w-xs"
            />
            {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}
            <label className="label cursor-pointer mt-4">
              <span className="label-text">Remember me</span>
              <input type="checkbox" className="toggle"/>
            </label>
            <select className="select select-bordered w-full rounded-lg mt-4">
              <option disabled selected>
              Select Account
              </option>
              <option>Buyer</option>
              <option>Seller</option>
              <option>Admin</option>
            </select>
          </div>
          <button className="btn bg-blue-600 w-full mt-7 text-white" value="login" type="login">Sign Up</button>
          {signUpError && <p className="text-red-500">{signUpError}</p>}

          <p className="mt-2 text-sm">New to Doctors Portal? <Link to='/login' className="text-secondary">Please Login</Link> </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline text-lg w-full mt-3" value="login" type="login">CONTINUE WITH GOOGLE</button>
        </form>
      </div>
    </div>
    );
};

export default SignUp;