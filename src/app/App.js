import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../components/pages/Home';
import User from '../components/pages/user/User';
import StudySetTab from '../components/pages/user/StudySetTab';
import FolderTab from '../components/pages/user/FolderTab';
import { USER_ROUTES } from '../utils/constant';
import Folder from '../components/pages/user/Folder';
import StudySetDetail from '../components/pages/study-set/StudySetDetail';
import StudySetEdit from '../components/pages/study-set/StudySetEdit';

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
      {
        path: 'study-set/:id',
        element: <StudySetDetail />,
      },
      {
        path: 'study-set/:id/:status',
        element: <StudySetEdit />,
      },
      { path: `:username/${USER_ROUTES.FOLDER}/:folder`, element: <Folder /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
