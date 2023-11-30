import { MoviesCard } from "./MoviesCard"

export const MoviesList = (props) => {
    const { list } = props;
    
    const onCheckTime = () => {
        console.log('check clicked from children')
    }
    


    return (<ul>
        {list.map((movie) =>(
            <MoviesCard name={movie.name} 
                        duracion={movie.duracion} 
                        descripcion={movie.descripcion}
                        onCheckTimeClick={movie.onCheckTimeClick} />
            ))}
    </ul>
    );
};
