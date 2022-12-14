import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyAllProducts from "../../Pages/Dashboard/MyAllProducts/MyAllProducts";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRout from "../PrivateRout/PrivateRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://car-shop-server-developer-johir.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://car-shop-server-developer-johir.vercel.app/products/${params.id}`
          ),
      },

      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRout>
        {" "}
        <DashboardLayout></DashboardLayout>{" "}
      </PrivateRout>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAllProducts></MyAllProducts>
      },
      {
        path: "/dashboard/allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
    ],
  },
]);

export default router;
