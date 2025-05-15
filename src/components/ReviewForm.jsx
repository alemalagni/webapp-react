import axios from 'axios';
import { useState } from 'react';

function ReviewForm({ movieId }) {
    const [name, setName] = useState('');
    const [vote, setVote] = useState(5);
    const [text, setText] = useState('');

}

export default ReviewForm;