import { Link } from 'react-router-dom';

export default function NavigationBrand() {
  return (
    <Link to="/" aria-label="Nathan Haynes-Magyar - Home">
      <span className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
        NHM
      </span>
    </Link>
  )
}