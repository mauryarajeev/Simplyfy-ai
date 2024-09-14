import { Link, useLocation } from 'react-router-dom'; // Import Link for navigation and useLocation to get current route
import { FaUser, FaHome } from 'react-icons/fa'; // Import Font Awesome icons
import { MdMap } from 'react-icons/md'; // Import Material Design icons

// Define menu items with their properties
const menuItems = [
  {
    id: 1,
    name: 'Contacts', // Name of the menu item
    link: '/contacts', // Route link for the menu item
    icon: <FaUser className="w-6 h-6" />, // Icon for the menu item (User icon from Font Awesome)
  },
  {
    id: 2,
    name: 'Charts & Maps', // Name of the menu item
    link: '/', // Route link for the menu item
    icon: <MdMap className="w-6 h-6" />, // Icon for the menu item (Map icon from Material Design)
  },
];

const FooterTabBar: React.FC = () => {
  const { pathname } = useLocation(); // Get the current path from the location object

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg lg:hidden"> {/* Mobile view only */}
      <div className="flex justify-around items-center h-16">
        {/* Map through menuItems to create footer tab bar links */}
        {menuItems.map((item) => (
          <Link
            key={item.id} // Unique key for each link
            to={item.link} // Navigation path
            className={`flex flex-col items-center justify-center gap-1 w-full h-full ${
              pathname === item.link
                ? 'text-blue-500' // Active item styling
                : 'text-gray-500' // Inactive item styling
            } transition duration-300 ease-in-out`}
          >
            {item.icon} {/* Render the icon */}
            <p className="text-xs font-medium uppercase">{item.name}</p> {/* Render the menu item name */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterTabBar;
