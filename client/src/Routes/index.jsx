import App from "../App.jsx";
import Login from "../components/Login.jsx";
import Registration from "../components/Registration.jsx";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import AddMovie from "../pages/AddMovie/AddMovie.jsx";
import MovieDetail from "../pages/MovieDetail/MovieDetail.jsx";

const routes  = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registration",
                element: <Registration />,
            },
            {
                path: "/add-movie",
                element: <AddMovie />,
            },
            {
                path: "/movie/:movieId",
                element: <MovieDetail />,
            },
        ]
    }
])

export default routes