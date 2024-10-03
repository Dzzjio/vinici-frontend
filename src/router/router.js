import { createBrowserRouter } from 'react-router-dom';
import Root from './root'; // Import Root component
import Home from '../pages/home';
import Election from '../pages/election';
import Error from '../pages/error'; // Optional: Import error page

const Router = createBrowserRouter([
    {
        path: '/',  // Root layout route
        element: <Root />,  // Wraps children with the Root component
        errorElement: <Error />,  // Optional: Handle errors like 404 or other
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/election',
                element: <Election />
            }
        ]
    }
]);

export default Router;
