import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Destinations from "../Pages/Destinations/Destinations";
import AddDestinations from "../Pages/Destinations/AddDestinations/AddDestinations";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Aboutus from "../Pages/Aboutus/Aboutus";
import TravelGuide from "../Pages/TravelGuide/TravelGuide";
import Blogs from "../Pages/Blogs/Blogs";
import MyList from "../Pages/MyList/MyList";
import UpdateMylist from "../Pages/MyList/UpdateMylist";
import AddCountry from "../Pages/AddCountry/AddCountry";
import CountryCard from "../Pages/CountryCard/CountryCard";
import CountryCardDetails from "../Pages/CountryCard/CountryCardDetails";
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
        path: `/profile`,
        element: <PrivateRouter><Profile></Profile></PrivateRouter>,
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
        path: "/travelguide",
        element: <TravelGuide></TravelGuide>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      },
      {
        path:'/aboutus',
        element: <Aboutus></Aboutus>
      },
      {
        path:`/destination/:id`,
        element:<PrivateRouter><CountryCardDetails></CountryCardDetails></PrivateRouter>,
        loader: ({params}) => fetch(`http://localhost:3000/destination/${params.id}`)
      },
      {
        path: 'mylist',
        element: <PrivateRouter><MyList></MyList></PrivateRouter>
      },
      {
        path:`/mylist/update/:id`,
        element: <PrivateRouter><UpdateMylist></UpdateMylist></PrivateRouter>,
        loader: ({params}) => fetch(`http://localhost:3000/mylist/update/${params.id}`)

      },
      {
        path:'/addcountry',
        element: <PrivateRouter><AddCountry></AddCountry></PrivateRouter>
      },
      {
        path: '/country/:country_name',
        element: <CountryCard></CountryCard>
      },
      {
        path: '/touristspot/details/:id',
        element: <PrivateRouter><CountryCardDetails></CountryCardDetails></PrivateRouter>,
        loader: ({params})=> fetch(`http://localhost:3000/destination/${params.id}`)
      }
    ],
    
  }
]);