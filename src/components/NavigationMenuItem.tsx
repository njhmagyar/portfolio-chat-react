import { Link } from 'react-router-dom';

interface NavigationMenuItemProps {
  to: string,
  text: string
}

export default function NavigationMenuItem({ to, text }: NavigationMenuItemProps) {
  return (
    <li className="mr-3">
      <Link to={ to } className="inline-block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md hover:text-blue-500 dark:hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
        { text }
      </Link>
    </li>
  )
}