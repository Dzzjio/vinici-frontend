import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import Home from '../pages/home';
import Election from '../pages/election';
import Error from '../pages/error';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
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
