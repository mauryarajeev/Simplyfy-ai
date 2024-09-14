import React from 'react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  // Extract the current route
  const currentPath = location.pathname;
  
  // Convert the path to a human-readable format
  const formatPath = (path: string): string => {
    if (path === '/') return 'Home';
    return path
      .split('/')
      .filter(segment => segment) // Remove empty segments
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)) // Capitalize the first letter
      .join(' ');
  };

  return (
    <header className="bg-gray-800 text-white p-2 text-center">
    <h1 className="text-lg font-bold">
      {formatPath(currentPath) === 'Home' ? 'CHART & MAP' : formatPath(currentPath).toUpperCase()}
    </h1>
  </header>  
  );
};

export default Header;
