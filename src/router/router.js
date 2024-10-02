import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Election from '../pages/election';

const Router = createBrowserRouter([
    {
        path: '',
        element: <Home />
    },
    {
        path: "/election",
        element: <Election />
    }
]);

export default Router;