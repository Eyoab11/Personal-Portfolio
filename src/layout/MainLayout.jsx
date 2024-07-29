import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Adjust path if necessary

const MainLayout = () => {
  const location = useLocation();
  const hideNavBarPaths = ['/project-details']; // Add paths where the navbar should be hidden

  const shouldHideNavBar = hideNavBarPaths.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavBar && <NavBar />}
      <Outlet />
    </div>
  );
};

export default MainLayout; // Ensure this line is present
