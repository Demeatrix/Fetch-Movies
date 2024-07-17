import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [movies, setMovies] = useState([])
  const [movieCount, setMovieCount] = useState(5)

  const fetchMovies = () => {
    axios.get('https://dummyapi.online/api/movies', { timeout: 5000 }) // Adjust timeout as needed (in milliseconds)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };

  useEffect(() => {
    fetchMovies()
  }, [])

  const loadNewMovies = () => {
    setMovieCount(prevCount => movieCount + 5)
  };


  return (
    <>
      <h1>Movies</h1>
      <h3>Movies Count: {movies.length}</h3>
      <button onClick={loadNewMovies}>Load New Movies</button>
      {movies.slice(0, movieCount).map((movie, index) => (
        <div key={movie.id}>
          <h2>{movie.id}</h2>
          <h2>{movie.movie}</h2>
          <p>{movie.rating}</p>
          <img src={movie.image} alt={movie.title} />
          <hr />
        </div>
      ))
      }
    </>
  );
};

export default App
