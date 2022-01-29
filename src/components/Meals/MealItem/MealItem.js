import React, {useContext} from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cort-context'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)

  
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id:props.meal.id,
      name:props.meal.name,
      amount:amount,
      price:props.meal.price
    })
  }

    return (
        <>
          <li className={styles.meal}>
              <div key={props.meal.id}>
                <h3>{props.meal.name}</h3>
                <div className={styles.description}>{props.meal.description}</div>
                <div className={styles.price}>TK.{props.meal.price}</div>
              </div>
              <div>
                <MealItemForm onAddToCart={addToCartHandler} />
              </div>
          </li>  
        </>
    )
}

export default MealItem
