const Cart = () => {
    let items = [];
    let cost = 0;
    for (var i = 0; i < sessionStorage.length; i++) {
        const item = sessionStorage.getItem(sessionStorage.key(i)).split(",")
        cost += parseFloat(item[1]);
        console.log(cost)
        items.push(item);
    }

    let tax = cost * 0.13;
    cost = cost + tax;

    return (
        <div className="cart">
            <div className="item-list">
                {items.map((item) => (
                    <div className="group-3">
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="text-wrapper-3">{item[0]}</div>
                                <div className="text-wrapper-3">Cost: ${item[1]}</div>
                            </div>
                        </div>
                        <div className="item-image">
                            <img src={item[2]} alt="" />
                        </div>
                    </div>
                ))}
            </div>
            <div >
                <h1 className="tax-total">
                    Tax: ${tax}
                </h1>
                <h1 className="tax-total">
                    Total: ${cost}
                </h1>
            </div>
        </div>
    );
}

export default Cart;