import Data from '../Data/Data.json'
import { Link, useParams } from 'react-router-dom'
import '../styles/Movie.css'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'



export default function Movie(){
    const {name}=useParams()
    const movie=Data.find(item =>item.name===name)

    return(
        <div style={{padding:"40px"}}>
            <Link to={'../'}><Button style={{backgroundColor:"#FFBA00",color: "black", fontSize:"20px", border:"2px"}}>Go Back</Button></Link>


        <div className='movie-wrapper'>
            <div className='movie-trailer'>
                <h1>Movie Trailer</h1>
                <iframe className='Trailer' width="100%" height="500px" src={movie.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='movie-description'>
                
            <Card style={{height:"100%"}}>
      <Card.Body style={{backgroundColor:"#092147"}}>
        <Card.Title className='movie-title'>{movie.name}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
    </Card>
            </div>
        </div>
        </div>
    )
}
