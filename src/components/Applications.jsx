import { apps } from '../data'
import { Link } from 'react-router-dom'
// import './App.css' // Import the CSS file for custom styles

const Applications = () => {
  const handleClick = () => {
    window.scroll(0, 0)
  }
  return (
    <main className='mt-20 mb-10 bg-gray-900'>
      <div className='max-w-6xl m-auto'>
        <div className='text-center'>
          <h2 className='text-3xl font-semibold tracking-wide pt-12'>
            Meaningful digital solutions that actually work
          </h2>
        </div>
        <div className='mt-12 swiper-container'>
          <div className='swiper-wrapper'>
            {apps.map((item) => {
              const { title, src, alt_description, description } = item
              return (
                <div
                  key={item.id}
                  className='swiper-slide flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-white-600/10 dark:border-gray-700 dark:bg-gray-800  swiper-slide-active'
                >
                  <Link to={`/app/${item.id}`} onClick={handleClick}>
                    <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primaryLight to-secondaryLight'>
                      <img src={src} alt={alt_description} />
                    </div>
                    <div className='mt-4 grow'>
                      <h3 className='text-xl font-semibold leading-8 text-gray-800 transition dark:text-white'>
                        {title}
                      </h3>
                      <p className='mb-3 mt-1 text-gray-600 dark:text-gray-300'>
                        {description}
                      </p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Applications
