import './App.css'
import Accordian from './components/accordian'
import RandomColorGenerator from './components/randon-color-generator'
import StarRating from './components/star-rating'


function App() {

  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColorGenerator/> */}
      <StarRating noOfStars={10}/>
    </div>
  )
}

export default App
