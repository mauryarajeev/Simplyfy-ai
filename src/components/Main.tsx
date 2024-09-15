import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for rendering nested routes
import Sidebar from './Sidebar'; 
import Header from './Header'; 
import Footer from "./Footer";

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
          <aside className="w-full md:w-64 hidden md:block bg-gray-800 overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 4rem)' }}>
            {/* Sidebar is scrollable when content overflows */}
            <Sidebar />
          </aside>
        )}

        {/* Main content section */}
        <main className="flex-1 p-4 bg-transparent overflow-auto">
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
