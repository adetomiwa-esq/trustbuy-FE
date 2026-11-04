import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Product from "../pages/Product/Product";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import NewProduct from "../pages/Admin/NewProduct";
import Products from "../pages/Admin/Products";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Cart/Checkout";
import PaymentReturn from "../pages/Cart/PaymentReturn";


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
                element: <Men />,
            },

            {
                path: "women",
                element: <Women />
                
            },

            {
                path: "product/:productId",
                element: <Product />
            },

            {
                path: "/cart",
                element: <Cart />
            },

            {
                path: "checkout",
                element: <Checkout />
            },

            {
                path: "payment/return",
                element: <PaymentReturn />
            },
        ]
    },

    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { index: true, element: <Products /> },
            { path: "products", element: <Products /> },
            { path: "products/new", element: <NewProduct /> },
            { path: "products/:productId/edit", element: <NewProduct /> },
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