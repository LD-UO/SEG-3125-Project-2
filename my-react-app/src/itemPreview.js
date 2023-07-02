import { useNavigate } from "react-router-dom";

const ItemPreview = () => {

    let Navigate = useNavigate();
    const routeChange = () => {
        let path = `/checkout`;
        Navigate(path);
    }

    let NavigateToInfo = useNavigate();
    const routeChangeToInfo = () => {
        let path = `/itemInfo`;
        NavigateToInfo(path);
    }

    return (
        <div className="item-preview-wrapper">
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
                <div className="button-wrapper">
                    <button type="button" onClick={routeChangeToInfo} id="viewItem" className="item-button">More Info</button>
                    <button type="button" onClick={routeChange} id="checkoutNow" className="item-button">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ItemPreview;