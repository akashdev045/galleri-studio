import React from 'react';
import './App.scss';
import Dashboard from './container/dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfileDetails from './container/ProfileDetails';
import VideoDetails from './components/VideoDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/profileDetail",
    element: <ProfileDetails />,
  },
  {
    path: "/videoDetails",
    element: <VideoDetails />,
  },
]);

function App() {

  return (
    <div className="mainContainer">
      <div className="bgMain" />
      <div className="responsiveContainer">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
