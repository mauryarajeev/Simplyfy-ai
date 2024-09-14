import { Link, useLocation } from 'react-router-dom'; // Import Link for navigation and useLocation to get current route
import { FaUser, FaHome } from 'react-icons/fa'; // Import Font Awesome icons
import { MdMap } from 'react-icons/md'; // Import Material Design icons

// Define menu items with their properties
const menuItems = [
  {
    id: 1,
    name: 'Contacts', // Name of the menu item
    link: '/contacts', // Route link for the menu item
    icon: <FaUser className="w-5 h-5" />, // Icon for the menu item (User icon from Font Awesome)
  },
  {
    id: 2,
    name: 'Charts & Maps', // Name of the menu item
    link: '/', // Route link for the menu item
    icon: <MdMap className="w-5 h-5" />, // Icon for the menu item (Map icon from Material Design)
  },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation(); // Get the current path from the location object

  return (
    <div className="lg:w-48 w-full h-screen flex lg:flex-col flex-row items-center lg:items-start lg:justify-start p-4 border-r border-gray-200 shadow-md lg:shadow-none">
      <div className="flex flex-col gap-4 w-full">
        {/* Map through menuItems to create navigation links */}
        {menuItems.map((item) => (
          <Link
            key={item.id} // Unique key for each link
            to={item.link} // Navigation path
            className="flex items-center text-gray-700 hover:text-white hover:bg-blue-500 rounded-lg transition duration-300 ease-in-out"
          >
            <div
              className={`flex items-center gap-3 p-2 w-full ${
                pathname === item.link
                  ? 'bg-blue-500 text-white' // Active item styling
                  : 'bg-transparent' // Inactive item styling
              }`}
            >
              {item.icon} {/* Render the icon */}
              <p className="text-sm font-medium uppercase">{item.name}</p> {/* Render the menu item name */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
