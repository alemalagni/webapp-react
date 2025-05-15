import axios from 'axios';
import { useState } from 'react';

function ReviewForm({ movieId }) {
    const [name, setName] = useState('');
    const [vote, setVote] = useState(5);
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:3000/movies/${movieId}/reviews`, {
                name,
                vote,
                text,
            });

            alert('Recensione inviata!')
        } catch (err) {
            console.error('Errore nel salvataggio:', err);
            alert('Errore nel salvataggio della recensione.')
        }
    };
}

export default ReviewForm;