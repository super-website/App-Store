import { Link, useParams } from 'react-router-dom'
import { apps } from '../data'
import { FaCheckCircle, FaApple, FaAndroid } from 'react-icons/fa'
import Application from './Application'

const SinglePage = () => {
  const { id } = useParams()
  const page = apps.find((item) => item.id == +id)

  return (
    <>
      <section className='pt-40 md:pt-32 sm:pt-40 mb-10' id='home'>
        <div className='max-w-6xl m-auto '>
          <div className='text-md breadcrumbs mb-3'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='#'>Application</Link>
              </li>
            </ul>
          </div>
          <div className='flex '>
            <div className='border-white border p-2'>
              <img src={page.src} width='200' height='200' alt='whatsapp' />
            </div>
            <div className='text-left  mt-4'>
              <div className='ml-10'>
                <h2 className='text-4xl text-info font-bold mb-4'>
                  {page.title}
                </h2>
                <p className='text-primary'>{page.alt_description}</p>
              </div>
              <div className='mt-10 ml-10 gap-5 flex items-center justify-start mr-20 '>
                <a
                  href={page.ios}
                  target='blank'
                  className='relative  flex h-11 sm:h-9 w-36 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800'
                >
                  <span className='relative text-base sm:text-sm font-semibold text-primary dark:text-gray-900 lg:text-primary lg:dark:text-white flex items-center gap-2'>
                    <FaApple />
                    IOS Download
                  </span>
                </a>
                <a
                  href={page.android}
                  target='blank'
                  className='relative  flex h-11 sm:h-9 w-46 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800'
                >
                  <span className='relative text-base sm:text-sm font-semibold text-gray-900 dark:text-gray-900 lg:text-primary lg:dark:text-white flex items-center gap-2'>
                    <FaAndroid />
                    Android Download
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-28  text-center p-20  bg-white'>
          <div className='max-w-6xl m-auto '>
            <div className='p-10'>
              <h2 className='text-5xl font-bold text-black mb-8'>
                {page.title}
              </h2>
              <p className='max-w-2xl m-auto text-secondary'>
                {page.description}
              </p>
            </div>
          </div>
        </div>

        <div className='bg-gray-100' id='about'>
          <div className='max-w-6xl m-auto '>
            <div className='text-center mb-10'>
              <h2 className='text-3xl text-black font-semibold p-10'>
                Steps & benefits
              </h2>
            </div>

            <div className='grid grid-cols-2 gap-20 items-center mb-20'>
              <div>
                <img
                  src='https://licenseware.io/wp-content/uploads/2022/11/MDM-Upload-1.png'
                  alt='upload'
                  className='object-cover'
                />
              </div>

              <div className='ml-10 '>
                <div>
                  <h2 className='text-3xl text-black'>Upload</h2>
                </div>
                <div className='mt-5'>
                  <p
                    className='flex gap-2
                items-center mb-2 text-black'
                  >
                    <FaCheckCircle className='text-black bg-black rounded-lg' />
                    <span className='text-black'>
                      Drag and drop files to upload
                    </span>
                  </p>

                  <p
                    className='flex gap-4
                items-center mb-2 text-black'
                  >
                    <FaCheckCircle className='text-black bg-black rounded-lg' />
                    <span className='text-black'>
                      Data is validated automatically
                    </span>
                  </p>

                  <p
                    className='flex gap-4
                items-center mb-2 text-black'
                  >
                    <FaCheckCircle className='text-black bg-black rounded-lg' />
                    <span className='text-black'> Click process</span>
                  </p>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-20 items-center mb-20'>
              <div className='ml-10'>
                <div>
                  <h2 className='text-3xl text-black'>Reports</h2>
                </div>
                <div className='mt-5'>
                  <p
                    className='flex gap-2
                items-center mb-2'
                  >
                    <FaCheckCircle className='text-black bg-black rounded-lg' />

                    <span className='text-black'>
                      {' '}
                      Identify licensing requirements
                    </span>
                  </p>

                  <p
                    className='flex gap-4
                items-center mb-2'
                  >
                    <FaCheckCircle className='text-black bg-black rounded-lg' />

                    <span className='text-black'>
                      Understood analysis steps taken
                    </span>
                  </p>

                  <p
                    className='flex gap-4
                items-center mb-2'
                  >
                    <FaCheckCircle className='text-black bg-black rounded-lg' />

                    <span className='text-black'>
                      Surface the required evidence
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <img
                  src='https://licenseware.io/wp-content/uploads/2022/11/MDM-Reports.png'
                  alt='upload'
                  className='object-cover'
                />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-20 items-center mb-20'>
              <div>
                <img
                  src='https://licenseware.io/wp-content/uploads/2022/11/MDM-Data.png'
                  alt='upload'
                  className='object-cover'
                />
              </div>

              <div className='ml-10'>
                <div>
                  <h2 className='text-3xl text-black'>Data Sources</h2>
                </div>
                <div className='mt-5'>
                  <p
                    className='flex gap-2
                items-center mb-2'
                  >
                    <FaCheckCircle className='text-black bg-black rounded-lg' />
                    <span className='text-black'>
                      Any data source, you name it
                    </span>
                  </p>

                  <p
                    className='flex gap-4
                items-center mb-2'
                  >
                    <FaCheckCircle className='text-black bg-black rounded-lg' />
                    <span className='text-black'>
                      Integration with Red Hot Discovery tool
                    </span>
                  </p>

                  <p
                    className='flex gap-4
                items-center mb-2'
                  >
                    <FaCheckCircle className='text-black bg-black rounded-lg' />
                    <span className='text-black'>
                      {' '}
                      Static upload or API integration
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Application />
        </div>
      </section>
    </>
  )
}

export default SinglePage
