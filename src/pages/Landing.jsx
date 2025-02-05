import { Helmet } from 'react-helmet'
import { About, Applications, Hero } from '../components'

const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>App Factory | Explore Our New Apps</title>
        <meta
          name='description'
          content='Unlock your ideas with our app factory! We craft stunning mobile and web applications tailored to your vision, ensuring exceptional user experiences and seamless functionality.'
        />
        <meta
          name='keywords'
          content='app factory, mobile apps, web apps, app development'
        />
      </Helmet>
      <Hero />
      <About />
      <Applications />
    </div>
  )
}

export default Landing
