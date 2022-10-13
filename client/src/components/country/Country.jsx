import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './country.css'

import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { ThemeContext } from '../../context'

function Country() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountries(res.data)
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const filteredCountry = countries.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='contApp' style={{ backgroundColor: darkMode && '#222' }}>
      <div className='contcont'>
        <div className='contSearch'>
          <form>
            <div className='fleft'>
              <SearchIcon className='icon' />
              <input
                type='text'
                placeholder='Search for a country '
                onChange={handleChange}
                style={{
                  backgroundColor: darkMode ? '#222' : 'white',
                  color: darkMode && 'white',
                }}
              />
            </div>
            <div className='fright'>
              <input
                type='text'
                placeholder='Filter by region '
                className='rightinput'
                onChange={(e) => setFilter(e.target.value)}
                style={{
                  backgroundColor: darkMode ? '#222' : 'white',
                  color: darkMode && 'white',
                }}
              />
              <ArrowDropDownIcon className='rgticon' />
            </div>
          </form>
        </div>
        <div className='map'>
          {filteredCountry.map((item, index) => {
            return (
              <div
                key={index}
                className='mapCont'
                style={{ backgroundColor: darkMode && '#222' }}
              >
                <div>
                  <img src={item.flags.png} alt='' />
                </div>
                <div className='mapdiv'>
                  <h3>{item.name.common}</h3>
                  <p>
                    Capital: <span>{item.capital}</span>
                  </p>
                  <p>
                    Region: <span>{item.continents}</span>
                  </p>

                  <p>
                    Population: <span>{item.population.toLocaleString()}</span>
                  </p>
                  <p>
                    Start of the week: <span>{item.startOfWeek}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Country
