import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
 
const router = createBrowserRouter([
   {
       path: "/",
       element: <Main></Main>,
       children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>,
        },
        {
            path: "/category/:id",
            element: <Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: "/products/:id",
            element: <Products></Products>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },

        {
            path: "*",
            element: <Error></Error>
        },

       ]
   }
]);
 
export default router;