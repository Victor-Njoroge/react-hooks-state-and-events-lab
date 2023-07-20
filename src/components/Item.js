import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart]=useState(false)
  function handleClick(){
    cart ? setCart(false): setCart(true)
  }
  const text= cart ? "Remove from Cart": "Add to Cart"
  const unique= cart ? "in-cart": ""
  const button= cart ? "remove" : "add"
  return (
    <li className={unique}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={button} onClick={handleClick}>{text}</button>
    </li>
  );
}

export default Item;
