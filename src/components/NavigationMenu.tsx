import NavigationMenuItem from './NavigationMenuItem';

export default function NavigationMenu({ isMobileMenuOpen }) {
  return (
    <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`}>
      <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-1 lg:flex flex-col lg:flex-row">
        <NavigationMenuItem to="/" text="Projects" />
        <NavigationMenuItem to="/resume" text="Resume" />
        <NavigationMenuItem to="/about" text="About" />
      </ul>
    </div>
  )
}