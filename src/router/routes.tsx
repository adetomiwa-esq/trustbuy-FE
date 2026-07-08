import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Product from "../pages/Product/Product";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import NewProduct from "../pages/Admin/NewProduct";
import Cart from "../pages/Cart/Cart";


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
                    },

                    {
                        path: "product/:product-id",
                        element: <Product />
                    }
                ]
                
            },

            {
                path: "women",
                element: <Women />
                
            },

            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },

    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <NewProduct />
            }
        ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    }
])