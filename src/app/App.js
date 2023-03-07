import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './common/Layout';
import Home from '../features/home/Home';
import User from '../features/user/User';
import StudySetTab from '../features/user/StudySetTab';
import FolderTab from '../features/user/FolderTab';

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
          { path: 'sets', element: <StudySetTab /> },
          { path: 'folders', element: <FolderTab /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
