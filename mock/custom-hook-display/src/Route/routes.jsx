import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ItemDetails from "../ItemDetails";

let routes = createBrowserRouter([{
    path : "/",
    element : <App />,
    children : [
        {
            path : ':id',
            element : <ItemDetails />
        }
    ]
}])

export default routes;