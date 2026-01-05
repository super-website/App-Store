import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Landing from './pages/Landing'
import SinglePage from './pages/SinglePage'
import Faqs from './components/Faqs'
import Error from './pages/Error'
import Songs from './pages/Songs'
import { HelmetProvider, Helmet } from 'react-helmet-async'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'app/:id', element: <SinglePage /> },
      { path: 'faqs', element: <Faqs /> },
      { path: 'tracks', element: <Songs /> },
    ],
  },
])

const helmetContext = {}

const App = () => {
  const mainTitle = 'App Factory'
  const mainDescription = 'Build and launch your ideas with App Factory.'

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>{mainTitle}</title>
        <meta name='description' content={mainDescription} />
      </Helmet>

      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
