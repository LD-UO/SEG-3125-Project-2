import { useNavigate } from "react-router-dom";

const ItemPreview = ({ image, name, brand, rating, price, description}) => {

    let Navigate = useNavigate();
    const routeChangeToBuy = () => {
        sessionStorage.setItem(name,[name,price,image]);
        let path = `/checkout`;
        Navigate(path);
    }

    let NavigateToInfo = useNavigate();
    const routeChangeToInfo = () => {
        let path = `/itemInfo/?name=${name}&brand=${brand}&rating=${rating}&price=${price}&description=${description}&image=${image}`;
        NavigateToInfo(path);
    }

    return (
        <div className="item-preview-wrapper">
            <div className="item-frame">
                <div className="item-attribute-wrapper">
                    <div className="large-attributes">
                        <div id="item-name" className='item-attribute'>{name}</div>
                        <div id="item-rating" className='item-attribute'>Rating: {rating}%</div>
                    </div>

                    <div className="small-attributes">
                        <div id="brand&size">{brand}</div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img className="item-image" src={image} alt="" /> {/*"./Assets/itemPlaceholder.png"  <- propper image format*/}
                </div>
                <div className="button-wrapper">
                    <button type="button" onClick={routeChangeToInfo} id="viewItem" className="item-button">More Info</button>
                    <button type="button" onClick={routeChangeToBuy} id="checkoutNow" className="item-button">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ItemPreview;