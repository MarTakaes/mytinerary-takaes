import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cities from './Pages/Cities';
import City from './Pages/City'


function App() {
  return (
    <BrowserRouter>
    <Routes>    
         <Route path="/" element={<Home />}/>   
         <Route path="/Cities" element={<Cities />}/>         
         <Route path="/City/:id" element={<City />}/>
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;