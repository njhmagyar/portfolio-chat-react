import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const toggleTheme = () => {
    console.log('toggle theme')
  }
  const isLightMode = false;

  return (
    <header className="w-full">
    <nav className="container relative flex flex-wrap items-center justify-between p-4 lg:p-8 mx-auto xl:px-1">
      <Link to="/" aria-label="Nathan Haynes-Magyar - Home">
        <span className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
          NHM
        </span>
      </Link>
      <div className="gap-3 mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
        <div className="flex items-center order-last">
          <button onClick={toggleTheme} className="text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20">
            <span className="sr-only">{ isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode' }</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg>
          </button>
        </div>
        <div className="mr-3 lg:flex">
          <Link to="mailto:njhmagyar@gmail.com" className="hidden lg:block px-6 py-2 text-white bg-gray-900 dark:bg-gray-700 rounded-md md:ml-5">Contact</Link>
        </div>
      </div>
      <button onClick={toggleMobileMenu} aria-label="Toggle Menu" type="button" className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-700">
        <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg>
      </button>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-1 lg:flex flex-col lg:flex-row">
          <li className="mr-3">
            <Link to="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md hover:text-blue-500 dark:hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
              Projects
            </Link>
          </li>
          <li className="mr-3">
            <Link to="/resume" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md hover:text-blue-500 dark:hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
              Resume
            </Link>
          </li>
          <li className="mr-3">
            <Link to="/about" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md hover:text-blue-500 dark:hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}