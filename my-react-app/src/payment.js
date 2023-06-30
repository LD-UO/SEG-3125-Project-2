import './payment.css'

const Payment = () => {
    return ( 
        <div className="PAYMENT">
            <div className="overlap-wrapper">
                <div className="div-wrapper">
                    <div className="item-list">
                        <div className="group-3">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="text-wrapper-3">Item Name</div>
                                    <div className="text-wrapper-3">Cost: $$$</div>
                                </div>
                            </div>
                        </div> <div className="group-3">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="text-wrapper-3">Item Name</div>
                                    <div className="text-wrapper-3">Cost: $$$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <h1 className="tax-total">
                            Tax: $$$
                        </h1>
                        <h1 className="tax-total">
                            Total: $$$
                        </h1>
                    </div>
                </div>
            </div>
            <form action="">
                <div className="group-4">
                    <div className="group-5">

                        <input type="submit" value="Confirm" className="overlap-group-2 text-wrapper-10" />

                    </div>
                    <div className="frame-4">
                        <div className="group-6">
                            <input type='text' className="overlap-group-3" name='cardnumber' placeholder='Enter Card Number' required />
                        </div>
                        <div className="group-6">
                            <input type='text' className="overlap-group-3" name='name' placeholder='Enter Name On Card' required />
                        </div>
                        <div className="group-6">
                            <input type='text' className="overlap-group-3" name='address' placeholder='Enter Address' required />
                        </div>
                        <div className="group-6">
                            <input type='text' className="overlap-group-3" name='city' placeholder='Enter City' required />
                        </div>
                        <div className="group-6">
                            <input type='text' className="overlap-group-3" name='province' placeholder='Enter Province' required />
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

export default Payment;