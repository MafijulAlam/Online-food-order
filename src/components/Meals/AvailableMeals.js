  import React, {useEffect,useState} from 'react'
  import styles from './AvailableMeals.module.css'
  import Card from './../UI/Card';
  import MealItem from './MealItem/MealItem';

 
  
  const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isloading, setisLoading] = useState(true);
    const [httpErrop, setHttpErrop] = useState(null);

    useEffect(() => {

      const fetchMeals= async () =>{

        const response = await fetch('https://online-food-a4293-default-rtdb.firebaseio.com/meals.json')
        const responseData = await response.json()

        if(!response.ok){
          throw new Error('Something went wrong')
        }

        const loadedMeals = []
        for(const key in responseData ){
          loadedMeals.push({
            id:key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          })
        }
        setMeals(loadedMeals)
        setisLoading(false)
      }
      
    
        fetchMeals().catch((error) => {
        setisLoading(false)
        setHttpErrop(error.message)
        
      } )
      
    }, []);

    if(isloading){
      return( <section className={styles.loading}>

        <h2> Loding...</h2>
      </section> )
    }

    if(httpErrop){
      return(
        <section className={styles.httpError}>
         <h1>
          {httpErrop}

         </h1>
        </section>
      )
    }

      return (
          <>
              <section className={styles.meals}>
                  <Card>
                    <ul>
                        {
                            meals.map( (meal) => (
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
  