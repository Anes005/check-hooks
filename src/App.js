import './App.css';
import MovieCard from './Components/MovieCard';
import MovieList from './Components/MovieList';
import Data from './Data/Data.json';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useMemo } from 'react';
import { Navbar } from 'react-bootstrap';


 

function App() {


  const [Title,setTitle]=useState("")
  const [Rate,steRate]=useState("")
  const items =useMemo(()=> {
    let i = Data
    if (Title !== ""){
      i= Data.filter(item =>item.name.includes(Title))
    }
    if (Rate !== ""){
      i= i.filter(item =>Number(item.rate) >= Number(Rate))
    }
    return(i) 
  },[Title,Rate])

   
  return (
    <div className='body' >
      <div >
        <nav>
          <div className='nav'>
          <h2>MOVIEs KIDs</h2>
          </div>
        </nav>
       
      <Form className='filter'>
         <Form.Group>
      <Form.Label htmlFor="Title">Title Movie</Form.Label>
      <Form.Control value={Title} onChange={e =>setTitle(e.target.value)}
        type="text"
        id="TitleFilter"/>
      </Form.Group>

      <Form.Group>
      <Form.Label htmlFor="rate">Rate</Form.Label>
      <Form.Select value={Rate} onChange={e => steRate(e.target.value)}>
      <option>Rate</option>
      <option  value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
     </Form.Select>
    
     </Form.Group>
     </Form>
     </div>

      <MovieList items={items}/>
      
    </div>
  );
}

export default App;
