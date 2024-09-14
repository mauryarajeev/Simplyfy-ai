import React from 'react';
import {Link} from 'react-router-dom';

const SideBar: React.FC = () => {
    const menuItems = [
        {
            id:1,
            name:"DashBoard",
            link:'/',
            icon:'rajeev',
        },
        {
            id:2,
            name:"Alnalytics",
            link:'/',
            icon:'rajeev',
        },
        {
            id:2,
            name:"Sales",
            link:'/',
            icon:'rajeev',
        }
    ];

return (
    <div className='w-full h-screen flex flex-row items-center'>
          <div className='flex flex-col gap-4  w-full'>
            {menuItems.map((item) => (
                   <Link
                   key={item.id}
                   to={item.link}
                   className="flex item-center text-gray-700 hover:text-white hover:bg-blue-500 "
                   >
                    <div className={`flex items-center gap-3 p-2 w-full`}>
                    {item.icon}
                    <p className='text-sm font-medium'> {item.name} </p>
                    </div>
                   </Link>
            ))}
             
          </div>
    </div>
)
}

export default SideBar;
