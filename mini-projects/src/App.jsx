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
import TabTest from './components/custom-tabs/tab-test'
import ModalTest from './components/custom-modal-popup/modal-test'
import GithubProfileFinder from './components/github-profile-finder/GithubProfileFinder'
import SearchAutoComplete from './components/search-autocomplete-with-api/SearchAutoComplete'
import TicTacToe from './components/tic-tac-toe/TicTacToe'
import FeatureFlagGlobalState from './components/feature-flag/context/Context'
import FeatureFlag from './components/feature-flag/FeatureFlag'
import UseFetchHookTest from './components/use-fetch/UseFetchHookTest'
import UseOnClickOutsideTest from './components/use-outside-hook/UseOnClickOutsideTest'
import UseWindowResizeTest from './components/use-window-resize/UseWindowResizeTest'
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom/ScrollToTopAndBottom'
import ScrollToSection from './components/scroll-to-top-and-bottom/ScrollToSection'


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
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <TabTest/> */}
      {/* <ModalTest/> */}
      {/* <GithubProfileFinder/> */}
      {/* <SearchAutoComplete/> */}
      {/* <TicTacToe/> */}
      {/* <FeatureFlagGlobalState>
      <FeatureFlag/>
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest/> */}
      {/* <UseOnClickOutsideTest/> */}
      {/* <UseWindowResizeTest/> */}
      {/* <ScrollToTopAndBottom/> */}
      <ScrollToSection/>
          </div>
  )
}

export default App
