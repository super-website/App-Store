import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const HomeLayout = () => {
  return (
    <div className='py-10'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout
