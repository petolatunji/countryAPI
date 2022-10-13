import Country from './components/country/Country'
import Navbar from './components/navbar/Navbar'

import { ThemeContext } from './context'
import { useContext } from 'react'
function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      className='app'
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Navbar />
      <Country />
    </div>
  )
}

export default App
