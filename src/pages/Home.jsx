import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(res => setMovies(res.data))
            .catch(err => console.error('Errore nel caricamento del film: ', err));
    }, []);

    return (
        <div>
            <h1 className='mb-4'>Lista dei Film</h1>
            <div className='row'>
                {movies.map(movie => (
                    <div className='col-md-4 mb-4' key={movie.id}>
                        <div className='card h-100'>
                            {movie.image && (
                                <img src={movie.image} className='card-img-top' alt={movie.title} />
                            )}
                            <div className='card-body'>
                                <h5 className='card-title'>{movie.title}</h5>
                                <p className='card-text'>{movie.abstract?.slice(0, 100)}...</p>
                                <Link to={`/movies/${movie.id}`} className='btn btn-primary'>Dettagli</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Home;