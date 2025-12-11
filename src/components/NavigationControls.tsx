import { Link } from 'react-router-dom';

import ThemeIcon from './ThemeIcon';

interface NavigationControlProps {
  isLightMode: boolean,
  toggleTheme: () => void,
  toggleMobileMenu: () => void
}

export default function NavigationControls({ 
  isLightMode, 
  toggleTheme, 
  toggleMobileMenu 
}: NavigationControlProps) {
  return (
    <>
      <div className="gap-3 mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
        <div className="flex items-center order-last">
          <button onClick={toggleTheme} className="text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20">
            <span className="sr-only">{isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</span>
            <ThemeIcon isLightMode={isLightMode} />
          </button>
        </div>
        <div className="mr-3 lg:flex">
          <Link to="mailto:njhmagyar@gmail.com" className="hidden lg:block px-6 py-2 text-white bg-gray-900 dark:bg-gray-700 rounded-md md:ml-5">Contact</Link>
        </div>
      </div>
      <button onClick={toggleMobileMenu} aria-label="Toggle Menu" type="button" className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-700">
        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
      </button>
    </>
  )
}