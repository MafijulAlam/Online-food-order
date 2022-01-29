import React from 'react'
import styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <>
            <header className={styles.header} > 
                <h1>OnlineFood</h1>
                <HeaderCartButton onclick={props.onclick}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="Imge of food" />
            </div>
        </>
    )
}

export default Header
