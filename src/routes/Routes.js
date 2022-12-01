import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetail from "../pages/MyServices/ServiceDetail";
import TotalServices from "../pages/MyServices/TotalServices";
import AddReview from "../pages/Review/AddReview";
import UpdateReview from "../pages/Review/UpdateReview";
import SetService from "../pages/SetService/SetService";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><SetService></SetService></PrivateRoute>
            },
            {
                path: '/services',
                element: <TotalServices></TotalServices>
            },
            {
                path: '/services/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`https://photography-website-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`https://photography-website-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/addreview/:id',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://photography-website-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://photography-website-server.vercel.app/reviews/${params.id}`)
            }
        ]
    }
])