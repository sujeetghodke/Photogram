import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Error from "./pages/error";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import CreatePost from "./pages/Post";
import Profile from "./pages/Profile";
import Myphotos from "./pages/Myphotos";
import ProtectedRoutes from "./components/ui/ProtectedRoutes";

export const router = createBrowserRouter([
    {
        element: <ProtectedRoutes />,
        children : [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />
            },
            {
                path: "/post",
                element: <CreatePost />,
                errorElement: <Error />
            },
            {
                path: "/profile",
                element: <Profile />,
                errorElement: <Error />
            },
            {
                path: "/myphotos",
                element: <Myphotos />,
                errorElement: <Error />
            }
        ]   
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />
    }
])

export default router;