import './itemInfo.css'
import { useNavigate } from "react-router-dom";
import Review from './review';

function ItemInfo() {

    //if i have time add the user review to this list and rerender
    const reviews = [
        {
            id: 1,
            description: "I purchased this product a week ago, and so far, it's been working great. The build quality is excellent, and it feels sturdy in my hands. The setup process was straightforward, and the product's performance has been smooth. The only minor downside is that the battery life could be a bit longer, but overall, I'm satisfied with my purchase.",
            rating: 80
        },
        {
            id: 2,
            description: "This item is fantastic! It's lightweight and durable, making it perfect for my outdoor activities. The material is of high quality, and it has withstood rough conditions. I particularly love the adjustable features that allow me to customize it to my preferences. It's definitely worth the investment, and I highly recommend it to fellow sports enthusiasts.",
            rating: 100
        },
        {
            id: 3,
            description: "I received this as a gift, and I've been impressed with its functionality. It's clear that a lot of thought went into its design.",
            rating: 75
        }
    ]


    let Navigate = useNavigate();
    const routeChange = () => {
        let path = `/checkout`;
        Navigate(path);
    }

    const image = new URLSearchParams(window.location.search).get("image");
    const name = new URLSearchParams(window.location.search).get("name");
    const brand = new URLSearchParams(window.location.search).get("brand");
    const rating = new URLSearchParams(window.location.search).get("rating");
    const price = new URLSearchParams(window.location.search).get("price");
    const description = new URLSearchParams(window.location.search).get("description");

    return (
        <div className="ITEMINFO">
            <div className="frame-wrapper item-review-wrapper">
                <div className="item-frame">
                    <div className="item-attribute-wrapper">
                        <div className="large-attributes">
                            <div id="item-name" className='item-attribute'>{name}</div>
                            <div id="item-rating" className='item-attribute'>Rating: {rating}%</div>
                        </div>

                        <div className="small-attributes">
                            <div id="brand">{brand}</div>
                            <div id="price">${price}</div>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img className="item-image" src={image} alt="" />
                    </div>
                    <div className="description-wrapper">
                        <p className="description">
                            {description}
                        </p>
                    </div>
                    <div className="button-wrapper">
                        <button type="button" onClick={routeChange} id="checkoutNow" className="item-button">Checkout Now</button>
                    </div>
                </div>

            </div>
            <div className="frame-wrapper more-like-this-wrapper">
                <div className="title-box">
                    <div className="title-wrapper">
                        <h1 className="title">
                            Reviews
                        </h1>
                    </div>
                </div>
                <div className="review-wrapper">
                    <form action="">
                        <div className="title-wrapper">

                            <input className='review-box' type="text" placeholder='Leave a review' required />
                            <input className='review-rating' type="text" placeholder='-/100' required />
                            <input type="submit" className="submit-review" />
                        </div>
                    </form>
                    <div className="review-list">
                        {reviews.map((review) =>
                            <div key={reviews.id} className="wrapper" >
                                <Review description={review.description} rating={review.rating} />
                            </div>)}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ItemInfo;