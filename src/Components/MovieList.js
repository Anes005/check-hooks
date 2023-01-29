
import MovieCard from './MovieCard';

export default function MovieList(props){
    return(
        
        <ul className='Cards' style={{listStyle:"none"}}>
            {props.items.map(movie => <li><MovieCard  {...movie} /></li>) }
        </ul>
        
    )



    
}