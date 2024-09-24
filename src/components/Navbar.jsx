import { pageLinks } from '../data'
import app_logo from '../assets/app-logo.webp'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const handleClick = () => {
    window.scroll(0, 0)
  }
  return (
    <nav
      className='fixed top-0 inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80'
      style={{ background: '#111827' }}
    >
      <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'>
        <div className='relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4'>
          <div className='relative z-20 flex w-full justify-between md:px-0 lg:w-max'>
            <Link to='/' onClick={handleClick}>
              <img src={app_logo} className='nav-logo max-h-full max-w-full' alt='App Factory' />
            </Link>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul
            className='space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm nav-links sm:flex sm:items-center'
            id='nav-links'
          >
            {pageLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.link}
                  onClick={handleClick}
                  className='block transition hover:text-primary dark:hover:text-primaryLight md:px-4'
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className='relative ml-auto flex h-11 sm:h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800'
                href='#contact-us'
              >
                <span className='relative text-base sm:text-sm font-semibold text-gray-900 dark:text-gray-900 lg:text-primary lg:dark:text-white'>
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
