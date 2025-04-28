import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Destinations from "../Pages/Destinations/Destinations";
import AddDestinations from "../Pages/Destinations/AddDestinations/AddDestinations";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/profile",
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
      {
        path: "/destinations",
        element: <Destinations></Destinations>,
      },
      {
        path:"/adddestinations",
        element: <PrivateRouter><AddDestinations></AddDestinations></PrivateRouter>
      },
      {
        path: "/adddestinations",
        element: <AddDestinations></AddDestinations>
      }
    ]
  }
]);