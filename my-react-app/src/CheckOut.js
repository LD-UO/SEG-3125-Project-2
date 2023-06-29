const CheckOut = () => {
    return (
    <div className="CHECKOUT">
        <div className="overlap-wrapper">
            <div className="overlap">
                <div className="overlap-group">
                    <div className="group">
                        <div className="overlap-group-wrapper">
                            <div className="navbar-wrapper">
                                <div className="navbar">
                                    <img className="image" alt="Image" src="image-1.png" />
                                    <div className="text-wrapper">SKIING</div>
                                    <div className="div">SKATING</div>
                                    <div className="div">HOCKEY</div>
                                    <div className="div">SNOWBOARDING</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group-2">
                        <div className="frame-wrapper">
                            <div className="frame">
                                <div className="text-wrapper-2">Location, Ottawa. ON</div>
                                <div className="text-wrapper-2">555-555-5555</div>
                                <div className="text-wrapper-2">email@email.com</div>
                            </div>
                        </div>
                    </div>
                    <a to="/checkout-1">
                        <img className="img" alt="Image" src="image-3.png" />
                    </a>
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="div-wrapper">
                        <div className="frame-2">
                            <div className="rectangle-3" />
                            <div className="frame-3">
                                <div className="text-wrapper-3">Item Name</div>
                                <div className="text-wrapper-4">Cost: $$$</div>
                            </div>
                        </div>
                    </div>
                    <div className="group-3">
                        <div className="frame-2">
                            <div className="rectangle-3" />
                            <div className="frame-3">
                                <div className="text-wrapper-3">Item Name</div>
                                <div className="text-wrapper-4">Cost: $$$</div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-4" />
                    <h1 className="tax-total">
                        Tax: $$$
                        <br />
                        Total: $$$
                    </h1>
                </div>
                <div className="group-4">
                    <div className="group-5">
                        <div className="overlap-group-2">
                            <div className="text-wrapper-5">Continue To Payment</div>
                        </div>
                    </div>
                    <div className="frame-4">
                        <div className="group-6">
                            <div className="overlap-group-3">
                                <div className="text-wrapper-6">First Name</div>
                            </div>
                        </div>
                        <div className="group-6">
                            <div className="overlap-group-3">
                                <div className="text-wrapper-6">Last Name</div>
                            </div>
                        </div>
                        <div className="group-6">
                            <div className="overlap-group-3">
                                <div className="text-wrapper-7">Email</div>
                            </div>
                        </div>
                        <div className="group-6">
                            <div className="overlap-group-3">
                                <div className="text-wrapper-7">Mobile</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-7">
                    <div className="overlap-2">
                        <div className="rectangle-5" />
                        <div className="group-8">
                            <div className="overlap-group-4">
                                <div className="text-wrapper-8">1</div>
                            </div>
                        </div>
                        <div className="group-9">
                            <div className="overlap-3">
                                <div className="text-wrapper-9">2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CheckOut;