import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-http-14c45-default-rtdb.firebaseio.com/meal.json');

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    description: responseData[key].description,
                    name: responseData[key].name,
                    price: responseData[key].price,
                });

            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}><p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (<section className={classes.MealsError}><p>{httpError}</p></section>
        );
    }

    const mealsList = meals.map(meal => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />));
    return (
        <section className={classes.meals}>
            <Card>
              <ul>{mealsList}</ul>  
            </Card>
        </section>
    );
};

export default AvailableMeals;