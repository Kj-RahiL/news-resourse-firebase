import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/User Login/Login";
import Register from "../pages/User Login/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:"/",
                loader: ()=> fetch('/news.json'),
                element: <Home></Home>
            },
            {
                path:"/news/:id",
                loader: ()=> fetch('/news.json'),
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:"/about",
                element: <About></About>
            },
            {
                path:"/career",
                element: <Career></Career>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ]
    }
])
    
  
export default router;