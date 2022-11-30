import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/AllUser/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllUser/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUser/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Myorders from "../../Pages/Dashboard/Dashboard/MyOrders/Myorders";
import AddProduct from "../../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProducts from "../../Pages/Dashboard/SellerDashboard/MyProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import Products from "../../Pages/Product/Products";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/products/:id',
                loader:({params})=>fetch(`https://mo-buy-and-sell-server-ahmad-shibbir.vercel.app/category/${params.id}`),
                element:<Products></Products>
            }

        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/myorders',
                element:<BuyerRoute><Myorders></Myorders></BuyerRoute>
            },
            {
                path:'/dashboard/my-products',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashboard/add-product',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/all-sellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/all-buyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>

       }
    
])

export default router;