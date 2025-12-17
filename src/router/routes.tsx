import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout /> ,
        children: [
            {
                index: true,
                element: <Home />
            },

            {
                path: "men",
                element: <Men />
                
            }
        ]
    }
])