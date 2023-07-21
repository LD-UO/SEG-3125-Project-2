import './navbar.css'

export const navBar = () => {
    return (
        <div className="box">
            <div className="group-wrapper">
                <div className="group">
                    <div className="overlap">
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                                <div className="navbar">
                                    <a href="/">
                                        <img className="image" alt="Image" src={require("./Assets/Icon.png")} height={50} width={50} />
                                    </a>
                                    <a href="/skiing" className="text-wrapper">SKIING</a>
                                    <a href="/hockey" className="text-wrapper">HOCKEY</a>
                                    <a href="/skating" className="text-wrapper">SKATING</a>
                                    <a href="/snowboarding" className="text-wrapper">SNOWBOARDING</a>
                                </div>
                            </div>
                        </div>
                        <a href="/checkout">
                            <img className="img" alt="Image" src={require("./Assets/ShoppingCartImage.png")} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default navBar;