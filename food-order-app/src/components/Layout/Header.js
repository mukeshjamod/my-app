import {Fragment} from 'react';
import classes from './Header.module.css';
import MealsImage from '../../assets/MealsImage.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactsMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage} alt='Food is a Healthy' /> 
        </div>
    </Fragment>
  )
}

export default Header;