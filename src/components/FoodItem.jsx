import React, { useContext } from 'react'
import './foodItem.css'
import rating from './rating_starts.png'
import greenIcon from './add_icon_green.png'
import  redIcon from './remove_icon_red.png'
import whiteIcon from './add_icon_white.png' 
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
      <img className='food-item-image' src={image} alt="" height={300} width={300}/>
      {
        !cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={whiteIcon} alt="" />
        :<div className='food-item-counter'>
        <img  onClick={()=>removeFromCart(id)} src={redIcon} alt="" />
        <p>{cartItems[id]}</p>
        <img  onClick={()=>addToCart(id)} src={greenIcon} alt="" />
        </div>
      }
      </div>
      <div className="food-item-info">
      <div className="food-item-name-rating">
      <p>{name}</p>
      <img src={rating} alt="" />
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
