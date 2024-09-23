import { useState, useEffect } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
const Theme = () => {
  const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme:dark)'
    ).matches
    const storedDarkMode = localStorage.getItem('darkTheme') === 'true'
    return storedDarkMode || prefersDarkMode
  }
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode)

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkTheme)
  }, [isDarkTheme])

  return (
    <section>
      <button className='' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className='text-2xl bg-slate-600 rounded-2xl p-2 w-8 h-8 transition' />
        ) : (
          <BsFillSunFill className='text-2xl bg-slate-600 rounded-2xl p-2 w-8 h-8' />
        )}
      </button>
    </section>
  )
}

export default Theme
