import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Search from './Components/Search';


function App () {

  return (
    <BrowserRouter>
      <div className='app-container'>
        <Navbar/>
        <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/gallery" element = {<Gallery/>}/>
                <Route path="/search" element = {<Search/>}/>
                
         </Routes>
      </div>
    
    </BrowserRouter>
   
   
  );
};
export default App