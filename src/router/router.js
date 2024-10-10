import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import Home from '../pages/home/home';
import Election from '../pages/election';
import Error from '../pages/error';
import Methodologies from '../pages/methodologies';
import About from '../pages/about';

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
            },
            {
                path: '/methodologies',
                element: <Methodologies />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);

export default Router;
