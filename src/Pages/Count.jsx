import React, { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <button onClick={decreaseQuantity}>-</button>
      <input style={{width:"20px"}} type="text" value={quantity} readOnly />
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantitySelector;
