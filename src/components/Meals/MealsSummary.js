import React from 'react'
import styles from './MealsSummary.module.css'

const MealsSummary = () => {
    return ( 
        <>
            <section className={styles.summary} >
                <h2> Best Food, Delivered to You</h2>
                <p>Choose your favorite meals from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
                <p> All our meals are cooke with high-qulity ingredients, just-in-time and of course by experienced chefs!</p>
            </section>
        </>
    )
}

export default MealsSummary
