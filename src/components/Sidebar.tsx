import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaHome, FaCog, FaSignOutAlt, FaTable, FaTh, FaBook } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { useState } from 'react';

// Define menu items with submenus and nested submenus
const menuItems = [
  {
    id: 1,
    name: 'Dashboards',
    icon: <FaTh className="w-5 h-5" />,
    submenu: [
      { id: 11, name: 'Analytics', link: '/dashboards/analytics' },
      { id: 12, name: 'Sales', link: '/dashboards/sales' },
    ],
  },
  {
    id: 2,
    name: 'Pages',
    icon: <FaTable className="w-5 h-5" />,
    submenu: [
      { id: 21, name: 'Profile', link: '/pages/profile' },
      { id: 22, name: 'Users', link: '/pages/users' },
      { id: 23, name: 'Account', link: '/pages/account' },
      { id: 24, name: 'Project', link: '/pages/project' },
      { id: 25, name: 'Pricing', link: '/pages/pricing' },
      { id: 26, name: 'RTL', link: '/pages/rtl' },
      { id: 27, name: 'Widgets', link: '/pages/widgets' },
      { id: 28, name: 'Chart', link: '/pages/chart' },
      { id: 29, name: 'Notification', link: '/pages/notification' },
    ],
  },
  {
    id: 3,
    name: 'Applications',
    icon: <FaCog className="w-5 h-5" />,
    submenu: [
      { id: 31, name: 'Kanban', link: '/apps/kanban' },
      { id: 32, name: 'Wizard', link: '/apps/wizard' },
      { id: 33, name: 'Data Table', link: '/apps/data-table' },
      { id: 34, name: 'Calendar', link: '/apps/calendar' },
    ],
  },
  {
    id: 4,
    name: 'Ecommerce',
    icon: <FaCog className="w-5 h-5" />,
    submenu: [
      { id: 41, name: 'Product', link: '/apps/product' },
      { id: 42, name: 'Order', link: '/apps/order' },
    ],
  },
  {
    id: 5,
    name: 'Authentication',
    icon: <FaCog className="w-5 h-5" />,
    submenu: [
      { id: 51, name: 'Sign in', link: '/apps/sign-in' },
      { id: 52, name: 'Sign up', link: '/apps/sign-up' },
      { id: 53, name: 'Reset Password', link: '/apps/reset-password' },
    ],
  },
  // New Docs Section with Nested Submenu under Basic
  {
    id: 6,
    name: 'Docs',
    icon: <FaBook className="w-5 h-5" />,  // Using a different icon for Docs
    submenu: [
      {
        id: 61,
        name: 'Basic',
        link: null, // Parent doesn't need a direct link
        submenu: [
          { id: 611, name: 'Overview', link: '/docs/basic/overview' },
          { id: 612, name: 'Installation', link: '/docs/basic/installation' },
          {
            id: 613,
            name: 'Tutorials', // Nested submenu within Basic
            link: null,
            submenu: [
              { id: 6131, name: 'Intro Tutorial', link: '/docs/basic/tutorials/intro' },
              { id: 6132, name: 'Advanced Tutorial', link: '/docs/basic/tutorials/advanced' },
            ],
          },
        ],
      },
      { id: 62, name: 'Components', link: '/docs/components' },
      { id: 63, name: 'Change Log', link: '/docs/change-log' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation(); // Get the current path from the location object
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null); // Track active submenu
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState<number | null>(null); // Track active nested submenu
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false); // Track profile section toggle

  const handleSubmenuToggle = (id: number) => {
    setActiveSubmenu(activeSubmenu === id ? null : id); // Toggle the submenu on click
  };

  const handleNestedSubmenuToggle = (id: number) => {
    setActiveNestedSubmenu(activeNestedSubmenu === id ? null : id); // Toggle the nested submenu on click
  };

  const toggleProfileSection = () => {
    setIsProfileOpen(!isProfileOpen); // Toggle profile section
  };

  return (
    <div className="lg:w-64 w-full h-screen bg-gray-800 text-gray-200 flex flex-col p-4 overflow-y-auto" style={{ maxHeight: '100vh', overflowX: 'hidden' }}>
      {/* Logo Section */}
      <div className="flex items-center mb-6">
        <FaHome className="text-white w-8 h-8 mr-3" />
        <span className="text-xl font-bold">Otis Admin PRO</span>
      </div>

      {/* Profile Section */}
      <div className="w-full">
        <div
          className="flex items-center justify-between text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer"
          onClick={toggleProfileSection}
        >
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40" // Placeholder profile image, replace with actual
              alt="User Avatar"
              className="rounded-full w-10 h-10"
            />
            <p className="text-lg font-semibold">Brooklyn Alice</p>
          </div>
          <MdArrowDropDown
            className={`ml-auto transition-transform ${isProfileOpen ? 'rotate-180' : ''
              }`}
          />
        </div>

        {/* Profile Dropdown */}
        {isProfileOpen && (
          <div className="ml-6 mt-2 flex flex-col gap-2">
            <Link
              to="/profile"
              className={`text-gray-400 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md ${pathname === '/profile' ? 'bg-gray-600 text-white' : ''
                }`}
            >
              M My Profile
            </Link>
            <Link
              to="/settings"
              className={`text-gray-400 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md ${pathname === '/settings' ? 'bg-gray-600 text-white' : ''
                }`}
            >
              S Settings
            </Link>
            <Link
              to="/logout"
              className={`text-gray-400 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md`}
            >
              L Logout
            </Link>
          </div>
        )}
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-4" />

      {/* Main Menu */}
      <div className="flex flex-col gap-4 w-full">
        {menuItems.map((item) => (
          <div key={item.id} className="w-full">
            {/* Main menu item */}
            <div
              className="flex items-center justify-between text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md cursor-pointer"
              onClick={() => handleSubmenuToggle(item.id)}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <p className="text-sm font-medium">{item.name}</p>
              </div>
              <MdArrowDropDown
                className={`ml-auto transition-transform ${activeSubmenu === item.id ? 'rotate-180' : ''
                  }`}
              />
            </div>

            {/* Submenu items */}
            {item.submenu && activeSubmenu === item.id && (
              <div className="ml-6 mt-2 flex flex-col gap-2">
                {item.submenu.map((subItem) => (
                  <div key={subItem.id}>
                    {/* Main submenu item */}
                    <div
                      className={`text-gray-400 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md cursor-pointer ${pathname === subItem.link ? 'bg-gray-600 text-white' : ''
                        }`}
                      onClick={() =>
                        subItem.submenu
                          ? handleNestedSubmenuToggle(subItem.id)
                          : undefined
                      }
                    >
                      {subItem.name}
                      {subItem.submenu && (
                        <MdArrowDropDown
                          className={`ml-auto transition-transform ${activeNestedSubmenu === subItem.id ? 'rotate-180' : ''
                            }`}
                        />
                      )}
                    </div>

                    {/* Nested submenu items */}
                    {subItem.submenu && activeNestedSubmenu === subItem.id && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {subItem.submenu.map((nestedSubItem) => (
                          <Link
                            key={nestedSubItem.id}
                            to={nestedSubItem.link || '#'} // Fallback to '#' if link is null
                            className={`text-gray-400 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md ${pathname === nestedSubItem.link ? 'bg-gray-600 text-white' : ''
                              }`}
                          >
                            {nestedSubItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
