import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Landing from './pages/Landing'
import SinglePage from './pages/SinglePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: 'true',
        element: <Landing />,
      },
      {
        path: 'app/:id',
        element: <SinglePage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} scrollTop={0} />
}

export default App
