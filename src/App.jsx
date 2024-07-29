import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound'; // Import NotFound component

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
