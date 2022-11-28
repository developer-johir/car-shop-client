// import React, { useState } from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from '../../hooks/useToken';
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if(token){
    navigate(from, {replace: true});
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-96 px-8 py-14 shadow-2xl rounded-lg">
        <h1 className="text-4xl text-center mb-8">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full rounded-lg max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
            <label className="label mt-4">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters of longer",
                },
              })}
              className="input input-bordered w-full rounded-lg max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <button
            className="btn bg-blue-600 w-full mt-7 text-white"
            value="login"
            type="login"
          >
            login
          </button>
          <div>{loginError && <p className="text-red-500">{loginError}</p>}</div>
          <p className="mt-2 text-sm">
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-secondary">
              Create new account
            </Link>{" "}
          </p>
          <div className="divider">OR</div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
