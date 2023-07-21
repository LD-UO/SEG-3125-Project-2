import React, { useState, useEffect } from 'react';

const Cart = () => {
  // Use the useState hook to manage the state of items, cost, and tax
  const [items, setItems] = useState([]);
  const [cost, setCost] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    // Function to update cart items from sessionStorage
    const updateCartItems = () => {
      let cartItems = [];
      let totalCost = 0;

      for (let i = 0; i < sessionStorage.length; i++) {
        const item = sessionStorage.getItem(sessionStorage.key(i)).split(',');
        totalCost += parseFloat(item[1]);
        cartItems.push(item);
      }

      setItems(cartItems);
      setCost(totalCost);
    };

    // Call the function to update cart items when the component mounts
    updateCartItems();

    // Set up a listener for sessionStorage changes to update cart items dynamically
    const handleSessionStorageChange = () => {
      updateCartItems();
    };

    window.addEventListener('storage', handleSessionStorageChange);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleSessionStorageChange);
    };
  }, []); // The empty dependency array ensures this useEffect runs only once when the component mounts

  useEffect(() => {
    // Update tax whenever cost changes
    setTax(cost * 0.13);
  }, [cost]);

  const removeItem = (item) => {
    sessionStorage.removeItem(item[0]);

    // Manually update the items state after removing an item
    setItems((prevItems) => prevItems.filter((cartItem) => cartItem[0] !== item[0]));
  };

  useEffect(() => {
    // Update the cost whenever items state changes
    let totalCost = 0;
    for (const item of items) {
      totalCost += parseFloat(item[1]);
    }
    setCost(totalCost);
  }, [items]);

  return (
    <div className="cart">
      <div className="item-list">
        {items.map((item) => (
          <div className="group-3" key={item[0]}>
            <div className="frame-2">
              <div className="frame-3">
                <div className="text-wrapper-3">{item[0]}</div>
                <div className="text-wrapper-3">Cost: ${item[1]}</div>
              </div>
            </div>
            <div className="item-image">
              <img src={item[2]} alt="" />
            </div>
            <div className="remove-item">
              <button onClick={() => removeItem(item)}>X</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="tax-total">Tax: ${tax.toFixed(2)}</h1>
        <h1 className="tax-total">Total: ${(cost + tax).toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;
