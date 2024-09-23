import { About, Applications, Hero } from '../components'
import Team from '../components/Team'
// import Slider from '../components/Slider'

const Landing = () => {
  return (
    <div>
      {/* <Slider /> */}
      <Hero />
      <Team />
      <About />
      <Applications />
    </div>
  )
}

export default Landing
