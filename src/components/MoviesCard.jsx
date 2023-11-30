export const MoviesCard = (props)=>{

    const {name, duracion, descripcion, onCheckTimeClick } = props;
    //const {duracion} = props;
    //const {descripcion} = props;

    const handleClick = () => {
        console.log('time for ${name}');
        onCheckTimeClick();
    };

    return (
        <li>
            <article>
                <h3>{name}</h3>
                <h4>{duracion}</h4>
                <p>{descripcion}</p>
                <button 
                    onClick={handleClick}>Check times</button>
            </article>
        </li>
    );
};