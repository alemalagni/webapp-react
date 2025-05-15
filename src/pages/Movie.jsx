import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StarRating from '../components/StarRating';
import ReviewForm from '../components/ReviewForm';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/movies/${id}`);
            setMovie(res.data.movie);
            setReviews(res.data.reviews);
        } catch (error) {
            console.error('Errore nel caricamento:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [id]);

    if (!movie) return <p>Caricamento...</p>;

    return (
        <div className="container mt-4">
            <h1>{movie.title}</h1>
            <p>Regista: <strong>{movie.director}</strong></p>
            <p>Genere: <strong>{movie.genre}</strong></p>
            <p>Anno: <strong>{movie.release_year}</strong></p>
            <p>{movie.abstract}</p>
            {movie.image && (
                <img src={movie.image} alt={movie.title} className='img-fluid mb-4' />
            )}

            <h3 className='mt-5'>Recensioni</h3>
            {reviews.length === 0 ? (
                <p>Nessuna recensione disponibile</p>
            ) : (
                <ul className='list-group'>
                    {reviews.map(review => (
                        <li key={review.id} className='list-group-item'>
                            <strong>{review.name}</strong> – <StarRating rating={review.vote} />
                            <p>{review.text}</p>
                        </li>
                    ))}
                </ul>
            )}

            <h4 className='mt-4'>Lascia una recensione</h4>
            <ReviewForm movieId={movie.id} onReviewAdded={fetchReviews} />
        </div>
    );
}

export default Movie;