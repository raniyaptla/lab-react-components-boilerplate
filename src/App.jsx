
import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/GalleryHeader';
import GalleryBody from './components/GalleryBody';
import Data from './components/Data';




function App() {
  return (
    <div>
      <GalleryHeader/>
      

      <div>
       <GalleryBody data={Data}/>
        
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
// star
