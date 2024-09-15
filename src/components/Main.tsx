import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import Header from './Header'; 


const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header section */}
      <header className="text-white shadow-md">
        <Header toggleSidebar={toggleSidebar} />
      </header>

      {/* Main content area with sidebar and main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar section (hidden on mobile) */}
        {isSidebarOpen && (
          <aside className="w-full h-screen md:w-64  md:block bg-gray-800 overflow-y-auto">
            <Sidebar />
          </aside>
        )}

        {/* Main content section */}
        <main className="flex-1 p-4 bg-transparent overflow-auto">
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
