import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
}

export default Movie;