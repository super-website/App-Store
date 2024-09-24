import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const HomeLayout = () => {
  return (
    <div className='sm:pt-10 md:pt-24'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout
