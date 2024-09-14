import React from 'react';
import { FaBars, FaUserCircle, FaCog, FaBell } from 'react-icons/fa';

// Define the props type for the Header component
interface HeaderProps {
  toggleSidebar: () => void; // toggleSidebar is a function that returns void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">

      {/* Search Bar */}
      <div className="flex-1">
        {/* Toggle button for Sidebar (visible only on mobile) */}
        <button onClick={toggleSidebar}>
          <FaBars size={24} className="text-gray-600" />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <input
          type="text"
          placeholder="Search here"
          className="p-2 border border-gray-300 rounded-md w-full max-w-sm"
        />
        <FaUserCircle size={24} className="text-gray-600" />
        <FaCog size={24} className="text-gray-600" />

        {/* Notification Icon with Badge */}
        <div className="relative">
          <FaBell size={24} className="text-gray-600" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-red-600 text-white text-xs font-bold rounded-full">9</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
