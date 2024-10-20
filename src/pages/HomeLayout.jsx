import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='sm:pt-10 md:pt-10'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout
