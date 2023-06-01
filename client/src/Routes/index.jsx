import App from "../App.jsx";
import Login from "../components/Login.jsx";
import Registration from "../components/Registration.jsx";
import {createBrowserRouter} from "react-router-dom";

const routes  = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registration",
                element: <Registration />,
            }
        ]
    }
])

export default routes