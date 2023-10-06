import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBorderNone, FaChartPie, FaCcDiscover, FaUser } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { FaChevronLeft } from 'react-icons/fa6';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const router = useRouter(); // Use the useRouter hook here
  const [activeNavItem, setActiveNavItem] = useState(GetDefaultActiveNavitem());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Move the GetDefaultActiveNavitem logic here
  function GetDefaultActiveNavitem() {
    const currentPath = usePathname();

    if (currentPath === '/dashboard') {
      return 'Dashboard';
    } else if (currentPath === '/devices') {
      return 'Devices';
    } else if (currentPath === '/monitor') {
      return 'Monitor';
    } else if (currentPath === '/userDetails') {
      return 'Users';
    } else if (currentPath === '/settings') {
      return 'Settings';
    } else if (currentPath === '/logout') {
      return 'Logout';
    } else {
      return null;
    }
  }

  const handleNavItemClick = (itemName: React.SetStateAction<string | null>) => {
    setActiveNavItem(itemName);
  };

  const isNavItemActive = (itemName: string | null) => {
    return activeNavItem === itemName;
  };

  return (
    <div
      className={`bg-custom-orange md:h-auto fixed ${
        isSidebarOpen ? 'md:w-1/6 sidebar-open' : 'md:w-16 sidebar-collapsed'
      } font-['Poppins'] flex flex-col transition-all duration-300`}
    >
      <button
        className="md:hidden absolute top-4 left-0 bg-custom-color text-white rounded-full"
        onClick={toggleSidebar}
      >
        <FaChevronLeft
          className={`h-6 w-6 ${isSidebarOpen ? '' : 'transform rotate-180'} transition-all duration-300`}
        />
      </button>
      <nav className={`p-4 -mt-36 2xl:ml-10 ${isSidebarOpen ? '' : 'hidden'}`}>
        <div className="p-4 text-center mt-24">
          <Image src="/images/Tewagii.png" alt="Logo" width={700} height={100} />
        </div>
        <ul>
          <li className="mb-8 flex items-center">
            <FaBorderNone
              className={`text-4xl lg-text-2xl mr-6 lg:mr-2 p-2 rounded-lg shadow-xxxl text-custom-color ${isNavItemActive('Dashboard') ? 'font-bold' : ''}${
                isNavItemActive('LandingPage') ? 'font-bold ' : 'text-white'
              }`}
            />
            <Link href="/dashboard">
              <div
                className={`${
                  isNavItemActive('Dashboard')
                    ? 'text-xl font-bold text-custom-color'
                    : 'text-white hover:text-custom-color text-xl'
                }`}
                onClick={() => handleNavItemClick('Dashboard')}
              >
                Dashboard
              </div>
            </Link>
          </li>
          <hr className="mt- border-solid border-t-2 ml-12 mb-4 mr-12" />
          <li className="mb-8 flex items-center">
            <FaChartPie
              className={`text-3xl mr-6 text-custom-color`}
            />
            <Link href="/devices">
              <div
                className={`${
                  isNavItemActive('Devices')
                    ? 'text-xl font-bold text-custom-color'
                    : 'text-white hover:text-custom-color text-xl'
                }`}
                onClick={() => handleNavItemClick('Devices')}
              >
                Devices
              </div>
            </Link>
          </li>
          <hr className="mt- border-solid border-t-2 ml-12 mb-4 mr-12" />
          <li className="mb-8 flex items-center">
            <FaCcDiscover
              className={`text-3xl mr-6 text-custom-color`}
            />
            <Link href="/monitor">
              <div
                className={`${
                  isNavItemActive('Monitor')
                    ? 'text-xl font-bold text-custom-color'
                    : 'text-white hover:text-custom-color text-xl'
                }`}
                onClick={() => handleNavItemClick('Monitor')}
              >
                Monitor
              </div>
            </Link>
          </li>
          <hr className="mt- border-solid border-t-2 ml-12 mb-4 mr-12" />
          <li className="mb-8 flex items-center mt-4">
            <FaUser
              className={`text-3xl mr-6 text-custom-color`}
            />
            <Link href="/userDetails">
              <div
                className={`${
                  isNavItemActive('Users')
                    ? 'text-xl font-bold text-custom-color'
                    : 'text-white hover:text-custom-color text-xl'
                }`}
                onClick={() => handleNavItemClick('Users')}
              >
                Users
              </div>
            </Link>
          </li>
          <hr className="mt- border-solid border-t-2 ml-12 mb-4 mr-12" />
          <hr className="mr-10 mt-40 md:mt-54 border-custom-color border-solid border-t-4 md:ml-4" />
          <li className="flex items-center mt-12">
            <FiSettings
              className={`text-3xl mr-6 text-custom-color`}
            />
            <Link href="/settings">
              <div
                className={`${
                  isNavItemActive('Settings')
                    ? 'text-xl font-bold text-custom-color'
                    : ' text-white hover:text-custom-color text-xl'
                }`}
                onClick={() => handleNavItemClick('Settings')}
              >
                Settings
              </div>
            </Link>
          </li>
        </ul>
        <li className="mb-8 flex items-center mt-12">
          <FiLogOut className="text-2xl mr-6 text-custom-color" />
          <Link href="/logout">
            <div className={`text-white hover:text-custom-color text-xl mb-2 ${isNavItemActive('Logout') ? 'font-bold' : ''}`}>Logout</div>
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Sidebar;
