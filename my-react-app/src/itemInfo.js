import './itemInfo.css'
import { useNavigate } from "react-router-dom";
import ItemPreview from './itemPreview';
import Review from './review';

const ItemInfo = () => {

    let Navigate = useNavigate();
    const routeChange = () => {
        let path = `/checkout`;
        Navigate(path);
    }

    return (
        <div className="ITEMINFO">
            <div className="frame-wrapper item-review-wrapper">
                <div className="item-frame">
                    <div className="item-attribute-wrapper">
                        <div className="large-attributes">
                            <div id="item-name" className='item-attribute'>Placeholder Name</div>
                            <div id="item-rating" className='item-attribute'>Rating: 96%</div>
                        </div>

                        <div className="small-attributes">
                            <div id="brand&size">Brand, Size: Large</div>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img className="item-image" src={require("./Assets/itemPlaceholder.png")} alt="" />
                    </div>
                    <div className="description-wrapper">
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti, repudiandae commodi vel distinctio in aperiam consectetur numquam, voluptas fugiat debitis quidem eos! Odit facere delectus nostrum sit consequuntur ducimus!
                        </p>
                    </div>
                    <div className="button-wrapper">
                        <button type="button" id="addTocart" className="item-button">Add to cart</button>
                        <button type="button" onClick={routeChange} id="checkoutNow" className="item-button">Checkout Now</button>
                    </div>
                </div>
                <div className="review-wrapper">
                    <form action="">
                        <div className="title-wrapper">
                            <div className="review-section-title">
                                Item Reviews
                            </div>
                            <input className='review-box' type="text" placeholder='Leave a review' required />
                            <input className='review-rating' type="text" placeholder='-/100' required />
                            <input type="submit" className="submit-review" />
                        </div>
                    </form>
                    <div className="review-list">
                        <Review />
                        <Review />
                        <Review />
                    </div>
                </div>
            </div>
            <div className="frame-wrapper more-like-this-wrapper">
                <div className="title-box">
                    <div className="title-wrapper">
                        <h1 className="title">
                            More Like This
                        </h1>
                    </div>
                </div>
                <div className="item-preview-list">
                    <ItemPreview />
                    <ItemPreview />
                    <ItemPreview />
                    <ItemPreview />
                    <ItemPreview />
                    <ItemPreview />
                    <ItemPreview />
                    <ItemPreview />
                    <ItemPreview />
                </div>
            </div>
        </div>
    );
}

export default ItemInfo;