import './navbar.css'

export const navBar = () => {
    return (
        <div className="fr">
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
                                        <a href="/skiing" className="text-wrapper">SKI</a>
                                        <a href="/hockey" className="text-wrapper">HOCKEY</a>
                                        <a href="/skating" className="text-wrapper">PATINAGE</a>
                                        <a href="/snowboarding" className="text-wrapper">PLANCHE À NEIGE</a>
                                    </div>
                                </div>
                            </div>
                            <a href="/">
                                <img className="img2" src={require("./Assets/langIcon.png")} alt="" />
                            </a>
                            <a href="/checkout">
                                <img className="img" alt="Image" src={require("./Assets/ShoppingCartImage.png")} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default navBar;