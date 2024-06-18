import { useState } from 'react'
import './App.css'
import Navbutton from './component/Navbutton'
import Newsapi from './component/Newsapi'
import Country from './component/Country'
function App() {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState('in');

  return (
    <>
      <Navbutton setCategory={setCategory} />
      <div className='newshead'><h3>{`Top Headlines ::  ${category}`}</h3>
        <div><Country setCountry={setCountry} /></div>
      </div>

      <div className='allnews'>
        <Newsapi category={category} country={country} />
      </div>
    </>
  )
}

export default App
