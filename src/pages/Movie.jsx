import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.error('Errore nel caricamento del film:', err));
    }, [id]);

    if (!movie) return <p>Caricamento...</p>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p><strong>Regista:</strong></p>
            <p><strong>Genere:</strong></p>
            <p><strong>Anno:</strong></p>
            <p>{movie.abstract}</p>
            {movie.image && (
                <img src={movie.image} alt={movie.title} className='img-fluid mb4' />
            )}

            <h3 className='mt-5'>Recensioni</h3>
            {movie.reviews.length === 0 ? (
                <p>Nessuna recensione disponibile</p>
            ) : (
                <ul className='list-group'>
                    {movie.reviews.map(review => (
                        <li key={review.id} className='list-group-item'>
                            <strong>{review.name}</strong> - Voto: {review.vote}/5
                            <p>{review.text}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Movie;