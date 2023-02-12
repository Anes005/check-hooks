import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  return (
    
    <Card style={{ width: '18rem',backgroundColor:"rgb(254, 217, 183)"}}>
      <Card.Img height={"400px"} variant="top" src={props.poster}/>
      <Card.Body>
        <Card.Title style={{color:"rgb(25, 159, 177)"}}>{props.name}</Card.Title>
        <Card.Text style={{height:"300px", overflowY:"scroll"}}>{props.description}</Card.Text>
        <Card.Text>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"5px" }}>
             <img style={{width:"20px" }} src="https://th.bing.com/th/id/R.6bb6ecacf1a3d58f8e9aced155dd1ae9?rik=v0LJ10LjTje1xA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fstar-alt-icon.png&ehk=N%2bNQrvVZvzSZFzXrfIu5hoBoqiXGspMrj9W%2bLeufGbU%3d&risl=&pid=ImgRaw&r=0"/>
             <p style={{fontSize:"20px" ,margin:"0px"}}>{props.rate}</p>
            </div>
        </Card.Text>
        <Link to={`/movie/${props.name}`} ><Button variant="primary">Watch now</Button></Link>
      </Card.Body>
    </Card>
    
  );
}

export default MovieCard;