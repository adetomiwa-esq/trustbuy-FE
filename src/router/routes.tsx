import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";


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
                children: [
                    {
                        index: true,
                        element: <Men />,
                    }
                ]
                
            },

            {
                path: "women",
                element: <Women />
                
            }
        ]
    }
])