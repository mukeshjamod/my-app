import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';


const Dummy_MEALS = [
    {
        id: 'm1',
        name: 'dhosa',
        description: 'rava sambhar and masala',
        price: 90,
    },
    {
        id: 'm2',
        name: 'dal-bati',
        description: 'masala dal rajsthani tasty bati',
        price: 60,

    },
    {
        id: 'm3',
        name: 'kaju paneer masala',
        description: 'graavy kaju panner salts roti punjabi',
        price: 150
    }];

const AvailableMeals = () => {
    const mealsList = Dummy_MEALS.map(meal => <MealItem key={meal.is} name={meal.name} description={meal.description} price={meal.price}/>)
    return (
        <section className={classes.meals}>
          <Card>
            {mealsList}
          </Card>
        </section>
    )
}

export default AvailableMeals;