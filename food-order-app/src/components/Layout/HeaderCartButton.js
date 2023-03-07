import { useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    // const [cartItem, setCartItem] = useState(0)
    // debugger
    const [isHighlighted,setIsHighlighted]= useState(false);

    const cartCtx= useContext(CartContext);
    
    const { items } = cartCtx;

    console.log(cartCtx);
  const numberOfCartItems = items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  }, 0); 


  const btnclasses = `${classes.button} ${isHighlighted? classes.bump:''}`;
  useEffect(() =>{
    if(items.length === 0 ){
      return;
    }
    setIsHighlighted(true);
    
    const timer = setTimeout(() =>
    {
      setIsHighlighted(false);
    },300);

    return () =>{
      clearTimeout(timer);
    };
  },[items]);

  return (
    <button className={btnclasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;