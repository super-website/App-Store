import { useState } from 'react'
import { pageLinks } from '../data'
import app_logo from '../assets/app-logo.webp'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const pathName = useLocation()

  const handleClick = () => {
    window.scroll(0, 0)
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className='sticky top-0 inset-x-0 z-20 w-full border-b backdrop-blur border-white/30 bg-gray-900/80 py-3'>
      <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'>
        <div className='flex items-center justify-between'>
          <div className='relative z-20'>
            <Link to='/' onClick={handleClick}>
              <img
                src={app_logo}
                className='nav-logo max-h-full max-w-full'
                alt='App Factory'
              />
            </Link>
          </div>
          <button
            className='lg:hidden  '
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul
            className={`${
              isOpen ? 'block' : 'hidden'
            } lg:flex lg:space-x-4 lg:items-center transition-all duration-300 ease-in-out absolute lg:static bg-gray-900 lg:bg-transparent w-full lg:w-auto left-0 top-full lg:top-auto lg:left-auto`}
          >
            {pageLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.link}
                  onClick={handleClick}
                  className={`block px-4 py-2 transition hover:text-primary  capitalize ${
                    location.pathname === link.link
                      ? 'text-primary font-bold'
                      : 'text-white'
                  } `}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className='relative ml-auto flex h-9 px-4 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 md:hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight max-w-xs mx-auto'
                href='#contact-us'
              >
                <span className='relative text-base font-semibold text-gray-900 lg:text-primary lg:dark:text-white'>
                  Let's Talk
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
