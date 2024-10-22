import { apps } from '../data'
import { Link } from 'react-router-dom'
const Applications = () => {
  const handleClick = () => {
    window.scroll(0, 0)
  }
  return (
    <main className='mt-10 bg-gray-900 mb-10'>
      <div className='max-w-6xl m-auto  md:w-full mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl font-semibold tracking-wide pt-12'>
            Meaningful digital solutions that actually work
          </h2>
        </div>
        <div className='mt-12'>
          <div className='md:p-4 py-4'>
            <div
              className='grid lg:grid-cols-3 gap-24 px-4 md:grid-cols-2 grid-cols-1 '
              style={{ cursor: 'grab' }}
            >
              {apps.map((item) => {
                const { title, src, alt_description, description } = item
                return (
                  <Link
                    className='swiper-slide flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none swiper-slide-active'
                    style={{ width: '320px', marginRight: '24px' }}
                    key={item.id}
                    to={`/app/${item.id}`}
                    onClick={handleClick}
                  >
                    <div className='flex h-14 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primaryLight to-secondaryLight sm:w-8'>
                      <img
                        src={src}
                        alt={alt_description}
                        className='max-w-full max-h-full'
                        width={40}
                      />
                    </div>
                    <div className='mt-4 grow'>
                      <h3 className='text-xl font-semibold leading-8 text-gray-800 transition dark:text-white'>
                        {title}
                      </h3>
                      <p className='mb-3 max-w-xs mt-1 text-gray-600 dark:text-gray-300'>
                        {description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Applications
