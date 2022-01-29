import React,{useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cort-context'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const [btnIsHilighted, setBtnIsHilighted] = useState(false);

    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce( (curNumber, item) => {
        return curNumber+ item.amount
    }, 0 )


    const btnStyles = `${styles.button} ${ btnIsHilighted ? styles.bump : ''}`

    useEffect(() => {
        if(cartCtx.items.length === 0){
            return
        }
        setBtnIsHilighted(true)
        const timer =  setTimeout(() => {
            setBtnIsHilighted(false)
            return() =>{
                clearTimeout(timer)
            }
        }, 300);

    }, [cartCtx]);

    return (
            <button className={btnStyles} onClick={props.onclick}>  
                <span className={styles.icon}>
                    <CartIcon/>
                </span>
                <span>
                   Your Cart
                </span> 
                <span className={styles.badge}>
                    {numberOfCartItems}
                </span>
            </button>
    )
}

export default HeaderCartButton
