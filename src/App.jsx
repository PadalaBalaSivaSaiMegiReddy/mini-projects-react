import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import RandomColorGenerator from './components/randon-color-generator'
import StarRating from './components/star-rating'


function App() {

  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColorGenerator/> */}
      {/* <StarRating noOfStars={10}/> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/>
    </div>
  )
}

export default App
