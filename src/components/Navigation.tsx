import { Link } from 'react-router-dom';
import { useState } from 'react';

import NavigationBrand from './NavigationBrand'
import NavigationControls from './NavigationControls'
import NavigationMenu from './NavigationMenu'

interface NavigationProps {
  isLightMode: boolean,
  toggleTheme: () => void
}
export default function Navigation({ 
  isLightMode, 
  toggleTheme
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="w-full bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 lg:p-8 mx-auto xl:px-1">
        <NavigationBrand />
        <NavigationControls 
          isLightMode={isLightMode}
          toggleMobileMenu={toggleMobileMenu}
          toggleTheme={toggleTheme} 
          onToggleMobileMenu={toggleMobileMenu}
          onToggleTheme={toggleTheme} 
        />
        <NavigationMenu isMobileMenuOpen={isMobileMenuOpen} />
      </nav>
    </header>
  )
}