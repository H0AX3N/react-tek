import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import App from "../App";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'services',
                element: <Services />
            }
        ]
    }
]);

export default router;