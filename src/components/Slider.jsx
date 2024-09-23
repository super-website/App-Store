// import { useState } from 'react'
// import { banners } from '../data'
// // import './Slider.css' // Import the CSS file for custom styles
// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => {
//     const nextIndex = (currentIndex + 1) % banners.length
//     setCurrentIndex(nextIndex)
//   }

//   const prevSlide = () => {
//     const prevIndex = currentIndex === 0 ? banners.length - 1 : currentIndex - 1
//     setCurrentIndex(prevIndex)
//   }

//   return (
//     <div className='slider'>
//       <button onClick={prevSlide} className='slider-button prev'>
//         Previous
//       </button>
//       <div className='banner-container'>
//         {banners.map((banner, index) => (
//           <div
//             key={index}
//             className={index === currentIndex ? 'banner active' : 'banner'}
//             style={{ backgroundImage: `url(${banner.image})` }}
//           ></div>
//         ))}
//       </div>
//       <button onClick={nextSlide} className='slider-button next'>
//         Next
//       </button>
//     </div>
//   )
// }

// export default Slider
