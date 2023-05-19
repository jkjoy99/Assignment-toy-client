import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";

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
            element:<MyToys></MyToys>
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
        }
      ]
    },
  ]);

  export default router