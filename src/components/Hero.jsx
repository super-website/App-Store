import logo from '../assets/logo.png'
import { products } from '../data'
const Hero = () => {
  return (
    <section className='pt-32 sm:pt-60  md:pt-48' id='home'>
      <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'>
        <div className='relative'>
          <h1 className='text-center text-5xl font-bold  text-white sm:text-6xl lg:text-left lg:text-7xl'>
            <span className='relative mb-1 block'>
              <span className='relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-transparent from-primaryLight to-secondaryLight md:pr-2'>
                Design
              </span>
            </span>
            Engineering
          </h1>
          <div className='relative items-center gap-12 lg:flex'>
            <div className='text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mr-auto lg:mt-0 lg:w-6/12 lg:text-left'>
              <p className='mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl'>
                Design-led engineering integrates design thinking into product
                development, fostering collaboration between engineers and
                designers to create solutions that are technologically sound,
                visually appealing, and user-centric. This approach harmonizes
                form and function, driving innovation and improving product
                quality.
                <br />
                <br />
                We create human-centered, functional and delightful digital
                experiences.
              </p>
            </div>
            <div className='mt-12 w-full overflow-hidden sm:mt-16 lg:-mr-20 lg:-mt-52 lg:w-6/12'>
              <img src={logo} alt='logo' className='logo' />
            </div>
          </div>
          <div className='mt-12 border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12 xl:mt-20'>
            <span className='text-sm font-semibold tracking-wider text-white'>
              BRANDS WE WORKED ON
            </span>
            <div className='mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4'>
              {products.map((item) => {
                const { id, src, alt_description, width, height } = item
                return (
                  <div
                    className='bg-gray-50 rounded-2xl shadow flex items-center justify-center h-32 w-full md:h-36'
                    key={id}
                  >
                    <img
                      alt={alt_description}
                      width={width}
                      height={height}
                      className='h-16 w-auto lg:h-24'
                      style={{ color: 'transparent' }}
                      src={src}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
