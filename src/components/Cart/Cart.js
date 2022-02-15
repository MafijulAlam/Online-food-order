import React, {useContext,useState} from 'react'
import styles from './Cart.module.css'
import CartItem from './CartItem';
import Modal from './../UI/Modal';
import CartContext from '../../store/cort-context';
import Checkout from './Checkout';

const Cart = (props) => {

  const [isOrder, setIsOrder] = useState(false);

  const cartCtx = useContext(CartContext)

  const totolAmount = cartCtx.totalAmount.toFixed(2)

    const cartItemRemoveHandler = id => {
      cartCtx.removeItem(id)
    }
    const cartItemAddHandler = item => {
      cartCtx.addItem({...item, amount:1})
    }

    const cartItems = ( 
      <ul className={styles['cart-items']}>
        {cartCtx.items.map( (item) => (

          <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
      </ul>
    )
    const orderHandler = () => {
      setIsOrder(true)
    }

    const orderdiv = <div className={styles.actions}>
    <button className={styles['button--alt']} onClick={props.onClose} >Close</button>
    <button className={styles.button} onClick={orderHandler}>Order</button>
    </div>
    
    return (
        <>
           {/* <Modal onClose={props.onClose}>
               {cartItems}
               <div className={styles.total} >
                    <span>Total Amount</span>
                    <span> TK:{totolAmount} </span>
               </div>
               <Checkout/>
               <div className={styles.actions}>
                  <button className={styles['button--alt']} onClick={props.onClose} >Close</button>
                   <button className={styles['button']}>Order</button>
               </div>
            </Modal>  */}


            <Modal onClose={props.onClose}>
                 {cartItems}
                   <div className={styles.total}>
                     <span>Total Amount</span>
                     <span> TK:{totolAmount} </span>
                  </div>
                  {isOrder && <Checkout onCancel={props.onClose} /> }
                  {!isOrder && orderdiv}
                   
                </Modal>
        </>
    )
}

export default Cart










// import styles from './Cart.module.css';
// import Modal from './../UI/Modal';
// import CartContext from './../../store/cort-context';

// const Cart = (props) => {
//   const cartItems = (
//     <ul className={styles['cart-items']}>
//       {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
//         <li>{item.name}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <Modal onClose={props.onClose}>
//       {cartItems}
//       <div className={styles.total}>
//         <span>Total Amount</span>
//         <span>35.62</span>
//       </div>
//       <div className={styles.actions}>
//         <button className={styles['button--alt']} onClick={props.onClose} >Close</button>
//         <button className={styles.button}>Order</button>
//       </div>
//     </Modal>
//   );
// };

// export default Cart;