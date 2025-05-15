function StarRating({ rating }) {
    const fullStar = '★';
    const emptyStar = '☆'

    return (
        <span>
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                    {i < rating ? fullStar : emptyStar}
                </span>
            ))}
        </span>
    );
}

export default StarRating;