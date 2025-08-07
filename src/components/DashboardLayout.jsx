// src/layouts/DashboardLayout.jsx
import React from 'react';
import DashNavbar from '../components/DashNavbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#f8f9fa] border-r">
        <DashNavbar />
      </div>

      {/* Page Content */}
      <div className="flex-1 p-6 px-10 bg-white overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
