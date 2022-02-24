import React, {useReducer} from 'react'
import CartContext from './cort-context'

const defaultCartState = {
    items: [],
    totalAmount:0
}

const cartReducer = (state, action) => {
    if(action.type==='ADD'){
        
        const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)

        const exintingCartItem = state.items[existingCartItemIndex]
        
        let updatedItems;

        if(exintingCartItem){
            const updatedItem ={
                ...exintingCartItem,
                amount:exintingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        else{
            
            updatedItems =state.items.concat(action.item)
        }


        
        return{
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type==='REMOVE'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id)

        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems;
        if(existingItem.amount=== 1){
            updatedItems = state.items.filter( (item) =>  item.id !==action.id  )
        }else{
            const updatedItem = {...existingItem, amount: existingItem.amount-1}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return{
            items: updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    if(action.type === 'CLEAR'){
        return defaultCartState
    }

    return defaultCartState
}


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item:item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }
    const clearCartHandler = () => {
        dispatchCartAction({type:'CLEAR'})
    }

    const cartContex ={
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart:clearCartHandler
    }

    return (
        <CartContext.Provider value={cartContex}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
