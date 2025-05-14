import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:300/movies/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.err('Errore nel caricamento del film:', err));
    }, [id]);
}

export default Movie;