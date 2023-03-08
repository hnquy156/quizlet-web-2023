import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './common/Layout';
import Home from '../features/pages/Home';
import User from '../features/pages/user/User';
import StudySetTab from '../features/user/StudySetTab';
import FolderTab from '../features/user/FolderTab';
import { USER_ROUTES } from './utils/constant';
import Folder from '../features/pages/user/Folder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: ':username',
        element: <User />,
        children: [
          { path: USER_ROUTES.SET, element: <StudySetTab /> },
          { path: USER_ROUTES.FOLDER, element: <FolderTab /> },
        ],
      },
      { path: `:username/${USER_ROUTES.FOLDER}/:folder`, element: <Folder /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
