import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../components/pages/Home';
import User from '../components/pages/user/User';
import StudySetTab from '../components/pages/user/StudySetTab';
import FolderTab from '../components/pages/user/FolderTab';
import { USER_ROUTES } from '../utils/constant';
import Folder from '../components/pages/user/Folder';

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
