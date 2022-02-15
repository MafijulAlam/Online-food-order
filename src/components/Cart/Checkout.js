import React from 'react'
import styles from './Checkout.module.css'

const Checkout = (props) => {

    const confirmHandler= (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={confirmHandler}>
        <div className={styles.control}>
            <label htmlFor='name'>Your name</label>
            <input type="text" id='name' />
        </div>
        <div className={styles.control}>
            <label htmlFor='street'>Street</label>
            <input type="text" id='street' />
        </div>
        <div className={styles.control}>
            <label htmlFor='postal code'>Postal code</label>
            <input type="text" id='postal_code' />
        </div>
        <div className={styles.control}>
            <label htmlFor='city'>City</label>
            <input type="text" id='city' />
        </div>
        <button type='button' onClick={props.onCancel}> Cancle</button>
        <button> Confirm</button>
    </form>
  )
}

export default Checkout