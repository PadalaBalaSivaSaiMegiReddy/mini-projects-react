import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import LightDarkMode from './components/light-dark-mode'
import LoadMoreData from './components/load-more-data'
import RandomColorGenerator from './components/random-color-generator'
import ScrollIndicator from './components/scroll-indicator'
import StarRating from './components/star-rating'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
import QRCodeGenerator from './components/qr-code-generator'


function App() {

  return (
    <div className="App">
      {/* <Accordian/> 
      <RandomColorGenerator/> 
      <StarRating noOfStars={10}/>  */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QrCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <QRCodeGenerator/> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  )
}

export default App
