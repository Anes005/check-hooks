import './App.css';
import { Route, Routes } from 'react-router-dom';
import Movie from './Pages/Movie';
import Movies from './Pages/Movies';


 

function App() { 

  return( 
  <Routes>
    <Route path='/' element={<Movies/>}/>
    <Route path='/movie/:name' element={<Movie/>}/>
  </Routes>
  


  )
}

export default App;
