const Review = ({description, rating}) => {
    return (
        <div className="review">
            <div className="reviewer-rating">
                Rating: {rating}%
            </div>
            <p className="review-text">
                Description: {description}
                </p>
        </div>

    );
}

export default Review;