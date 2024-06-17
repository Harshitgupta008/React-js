import { useState } from 'react'
import './App.css'
import Newsapi from './component/Newsapi'
function App() {
  const [category,setCategory] = useState("general");
  
  return (
    <>
      <div className="container">
        <div className="container-navcard">
          <div onClick={()=>{setCategory("general")}} className='button-intrest'>General</div>
          <div onClick={()=>{setCategory("business")}} className='button-intrest'>Business</div>
          <div onClick={()=>{setCategory("entertainment")}} className='button-intrest'>Entertainment</div>
          <div onClick={()=>{setCategory("health")}} className='button-intrest'>Health</div>
          <div onClick={()=>{setCategory("science")}} className='button-intrest'>Science</div>
          <div onClick={()=>{setCategory("sports")}} className='button-intrest'>Sports</div>
          <div onClick={()=>{setCategory("technology")}} className='button-intrest'>Technology</div>
        </div>
      </div>
      <div className='newshead'><h3>{`Top Headlines ::  ${category}`}</h3></div>
      <div className='allnews'>
        <Newsapi category={category}/>
      </div>
    </>
  )
}

export default App
