import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Details from "../pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/addtoy',
            element: <AddToy></AddToy>
        },
        {
            path: '/mytoys',
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/alltoys',
          element: <AllToys></AllToys>,
          loader: ()=> fetch('http://localhost:5000/toy')
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SingUp></SingUp>
        },
        {
          path:"/details/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        }
      
      ]
    },
  ]);

  export default router