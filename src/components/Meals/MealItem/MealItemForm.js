import React,{useRef,useState} from 'react'
import Input from '../../UI/Input'
import styles from './MealItemForm.module.css'

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

    const enteredAmount =amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    
    if(enteredAmount.trim().length ===0 || enteredAmountNumber <1 || enteredAmountNumber > 9){
        setAmountIsValid(false)
        return
    }
    props.onAddToCart(enteredAmountNumber)
    }


    return (
        <>
            <form className={styles.form} onSubmit={submitHandler}>
                <Input 
                ref={amountInputRef}
                lable="Amount" 
                input={{ 
                    id:'amount' + props.id,
                    type:'number',
                    max:'9',
                    min:'1',
                    step:'1',
                    defaultValue:'1'
                    } }/>
                <button>+Add</button>
                {!amountIsValid && <p> please enter valid amount</p>}
            </form>
        </>
    )
}

export default MealItemForm
