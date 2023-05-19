import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";

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
        }
      ]
    },
  ]);

  export default router