import { RouterProvider } from 'react-router-dom';
import Router from './router/router';
import './App.css';

const App = () => {
  return (
      <RouterProvider router={Router} />
  );
};

export default App;
