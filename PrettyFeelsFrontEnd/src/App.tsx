import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginForm from "./pages/login.tsx";
import HomePage from "./pages/home.tsx";
import Shop from "./pages/shop.tsx";
import AdminDashboard from "./pages/admindashboard.tsx";
import Review from "./pages/review.tsx";

const router = createBrowserRouter(
    [
        {
            path:"/login",
            element : <LoginForm />
        },
        {
            path:"/",
            element : <HomePage />
        },
        {
            path:"/home",
            element : <HomePage />
        },
        {
            path:"/shop",
            element : <Shop />
        },
        {
            path:"/admin",
            element : <AdminDashboard/>
        },

        {
            path:"/review/:productId",
            element : <Review/>
        },




    ]
)
function App() {

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}
export default App