import Header from "./components/Header"
import { MoviesList } from "./components/MoviesList"


const latestMovies = [
  {name:"Avatar 1", duracion:"60 min", descripcion:"Es la primera etapa"},
  {name:"Avatar 2", duracion:"90 min", descripcion:"Es la segunda etapa"},
  {name:"Avatar 3", duracion:"120 min", descripcion:"Es la tercera etapa"},
]

const newMovies = [
  {name:"Avatar 5", duracion:"60 min", descripcion:"Es la primera etapa"},
  {name:"Avatar 6", duracion:"90 min", descripcion:"Es la segunda etapa"},
  {name:"Avatar 7", duracion:"120 min", descripcion:"Es la tercera etapa"},
]

function App() {
  return (
    <>
      <Header/>
      <MoviesList list={latestMovies}/>
      <MoviesList list={newMovies}/>
    </>
  )
}

export default App
