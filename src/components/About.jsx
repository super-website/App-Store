const About = () => {
  return (
    <section id='about' className='mt-32'>
      <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'>
        <div className='text-center'>
          <span className='text-sm font-semibold uppercase tracking-widest text-primary dark:text-secondaryLight'>
            About The Factory
          </span>
          <h2 className='mx-auto my-6 text-center text-4xl font-bold text-white-900 dark:text-white sm:max-w-2xl lg:max-w-3xl lg:text-5xl'>
            We love building amazing apps for{' '}
            <span className='bg-gradient-to-r from-primaryLight to-secondaryLight bg-clip-text text-transparent text-white'>
              amazing clients
            </span>
          </h2>
        </div>
        <div className='mt-20'>
          <div className='gap-6 space-y-12 md:flex md:space-y-0'>
            <div className='relative text-center md:mb-32 md:w-3/5 md:pr-16 md:text-left'>
              <h3 className='text-2xl font-bold text-white dark:text-white md:text-3xl'>
                Decades of experience in design and development
              </h3>
              <p className='mt-8 text-lg text-gray-600 dark:text-gray-300'>
                The App Factory serves as an end-to-end mobile product agency,
                emphasizing on the design and development of businesses and
                startups with a mobile-centric approach. It was established by
                industry veterans who previously held prominent positions at
                companies such as Globe Telecom and ABS-CBN. The team at The App
                Factory comprises individuals who possess firsthand experience
                and insights from being key players in significant ventures.
                <br />
                <br />
                We approach each project with the dedication and commitment as
                though it was a personal endeavor, and our methodology
                guarantees the timely and cost-effective creation of products
                that generate tangible value.
              </p>
            </div>
            <div className='relative -m-4 h-[344px] overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:h-auto md:w-2/5 md:overflow-visible md:px-0'>
              <img
                alt='team'
                loading='lazy'
                width='640'
                height='960'
                className='h-full rounded-3xl object-cover object-center md:absolute md:left-0 md:top-0 md:w-full md:align-middle'
                style={{ color: 'transparent' }}
                sizes=''
                src='https://theappfactory.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam.67a17160.jpeg&w=640&q=75'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
