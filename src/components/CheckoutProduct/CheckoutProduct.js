import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "../../StateProvider"

function CheckoutProduct({id, brand, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue()

const removeFromBasket = () => {

  dispatch({
    type: "REMOVE_FROM_BASKET",
    id: id
  })
}

  return (
    <div className="checkoutProduct">
      <img className= "checkoutProduct_image" src={image} alt=""></img>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{brand}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {
            Array(rating)
              .fill()
              .map((_) =>
                <p>⭐</p>)
          }
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
