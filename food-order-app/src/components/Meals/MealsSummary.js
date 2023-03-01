import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
     <h2>Delicious Food</h2>
     <p>favourite meals</p>
     <p>high-quality ingredients</p>
    </section>
  );
};

export default MealsSummary;