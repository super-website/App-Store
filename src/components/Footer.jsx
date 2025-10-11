import SubFooter from './SubFooter'

const Footer = () => {
  return (
    <>
      <section id='contact-us' className='bg-slate-950'>
        <div className='mx-auto py-8 px-4 sm:px-12 xl:max-w-6xl xl:px-0 flex flex-col md:flex-row justify-between'>
          <div>
            <h1 className='md:text-5xl text-left mb-6 pt-6 text-2xl'>
              <span>Let&apos;s Talk</span>
              <span className='md:text-4xl text-xl'>Do you have an idea?</span>
            </h1>
            <p className='text-left text-sm md:text-xl'>
              Contact us to learn how we can help you build the best digital
              solution for you.
            </p>
          </div>
          <div className='flex flex-col  items-end sm:mt-5 sm:items-right ml-40'>
            <a
              href='https://mail.google.com/mail/u/0/#inbox?compose=new'
              className='link-error'
            >
              hello@theappfactory.io
            </a>
            <h2 className='mt-6 md:text-2xl sm:text-sm sm:font-bold sm:mb-4'>
              Locations
            </h2>
            <div className='flex flex-col items-end  mb-5 text-right'>
              <p className='text-sm '>Quezon City,PH</p>
              <span>(+63) 917-500-6605</span>
            </div>
            <div className='flex flex-col items-end'>
              <p> Sydney, AU </p>
              <span> (+61) x-xxxx-xxxx</span>
            </div>
          </div>
        </div>
      </section>
      <SubFooter />
    </>
  )
}

export default Footer
