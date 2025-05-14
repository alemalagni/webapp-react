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
}