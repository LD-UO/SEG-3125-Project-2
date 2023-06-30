import './CheckOut.css'

const CheckOut = () => {
    return (
        <div className="CHECKOUT">
            <div className="overlap-wrapper">
                <div className="div-wrapper">
                    <div className="item-list">
                        <div className="group-3">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="text-wrapper-3">Item Name</div>
                                    <div className="text-wrapper-3">Cost: $$$</div>
                                    <img src='' />
                                </div>
                            </div>
                        </div> <div className="group-3">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="text-wrapper-3">Item Name</div>
                                    <div className="text-wrapper-3">Cost: $$$</div>
                                    <img src='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="tax-total">
                        Tax: $$$
                        <br />
                        Total: $$$
                    </h1>
                </div>
            </div>
            <form action="">
                <div className="group-4">
                    <div className="group-5">

                        <input type="submit" value="Continue To Payment" className="overlap-group-2 text-wrapper-9" />

                    </div>
                    <div className="frame-4">
                        <div className="group-6">
                            <input type='text' className="overlap-group-3" name='fname' placeholder='Enter First Name' required />
                        </div>
                        <div className="group-6">
                            <input type='text' className="overlap-group-3" name='lname' placeholder='Enter Last Name' required />
                        </div>
                        <div className="group-6">
                            <input type='email' className="overlap-group-3" name='email' placeholder='Enter Email' required />
                        </div>
                        <div className="group-6">
                            <input type='text' className="overlap-group-3" name='phone' placeholder='Enter Phone Number' required />
                        </div>
                    </div>
                </div>
            </form>
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
    );
};

export default CheckOut;