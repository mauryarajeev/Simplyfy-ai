import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for rendering nested routes
import Sidebar from './Sidebar'; // Import Sidebar component
import Header from './Header'; // Import Header component
import FooterTabBar from './FooterTabBar'; // Import FooterTabBar component

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header section */}
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <Header />
      </header>
      {/* Main content area with sidebar and main content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar section (hidden on mobile) */}
        <aside className="bg-gray-200 w-full md:w-64 p-4 md:block hidden">
          <Sidebar />
        </aside>
        {/* Main content section */}
        <main className="flex-1 p-4 bg-transparent">
          <Outlet /> {/* Render nested routes here */}
        </main>
      </div>
      {/* Footer section (visible on mobile only) */}
      <footer className="lg:hidden"> {/* Hidden on large screens */}
        <FooterTabBar /> {/* Render FooterTabBar component */}
      </footer>
    </div>
  );
};

export default Layout;
