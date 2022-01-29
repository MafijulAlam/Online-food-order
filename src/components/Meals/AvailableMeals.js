  import React from 'react'
  import styles from './AvailableMeals.module.css'
  import Card from './../UI/Card';
  import MealItem from './MealItem/MealItem';

  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Birani',
      description: 'Special local variety of rice, meat and spices',
      price: 119.99,
    },
    {
      id: 'm2',
      name: 'Fuchka',
      description: 'Special Fuchks',
      price: 49.50,
    },
    {
      id: 'm3',
      name: 'Barbecue ',
      description: 'Chicken special barbecue',
      price: 100.00,
    },
    {
      id: 'm4',
      name: 'Burger',
      description: 'Healthy...and testy...',
      price: 84.99,
    },
     {
      id: 'm5',
      name: 'Polao',
      description: 'Special polao',
      price: 98.99,
    },
  ];
  
  const AvailableMeals = () => {
      return (
          <>
              <section className={styles.meals}>
                  <Card>
                    <ul>
                        {
                            DUMMY_MEALS.map( (meal) => (
                                   <MealItem 
                                   meal={meal}
                                   key={meal.id} 
                                   id={meal.id}/>
                                
                            ))
                        }
                    </ul>
                  </Card>
              </section>
          </>
      )
  }
  
  export default AvailableMeals
  