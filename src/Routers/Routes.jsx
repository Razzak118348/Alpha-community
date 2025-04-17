import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import Contact from "../Pages/Contact/Contact";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>

            },
            {
                path:'/events',
                element: <Events></Events>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            }
        ]

    }
])

export default router;