import {Navigate, createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from './components/GuestLayout.jsx';
import Login from './views/Login.jsx';
import Home from './views/Home.jsx';
import NotFound from "./views/NotFound.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home/" />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;