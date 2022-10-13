import './navbar.css'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../context'

const Navbar = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' })
  }
  return (
    <div className='navbar' style={{ backgroundColor: darkMode && '#222' }}>
      <div className='navCont'>
        <div className='right'>
          <span className='rs'>Where in the world?</span>
        </div>
        <div className='left'>
          <span className='lefticon'>
            <DarkModeIcon className='licon' onClick={handleClick} />
            <p className='lp'>Dark Mode</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
