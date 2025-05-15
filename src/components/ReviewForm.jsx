import axios from 'axios';
import { useState } from 'react';

function ReviewForm({ movieId, onReviewAdded }) {
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
            setName('');
            setVote(5);
            setText('');

            if (onReviewAdded) onReviewAdded();
        } catch (err) {
            console.error('Errore nel salvataggio:', err);
            alert('Errore nel salvataggio della recensione.')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder='Nome' required />
            <input type="number" value={vote} onChange={e => setVote(Number(e.target.value))} min='1' max='5' required />
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder='Testo' />
            <button type='submit'>Invia recensione</button>
        </form>
    );
}

export default ReviewForm;