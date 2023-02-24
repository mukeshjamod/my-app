import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
    //state variable Declare
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    
    const addUserHandler = (event) => {
        event.preventDefault();
        
        //not take blank array value 
        if(enteredUsername.trim().length === 0 ||enteredAge.trim().length === 0)
        {setError({title:'invalid input',
                   message:'please enter a valid name and age(non empty value)'
                });
            return ;
        }
        if(+enteredAge < 1)
        {setError({
            title:'invalid age',
            message:'please enter a valid age (>0). '
        });
            return ;
        }

        props.onAddUser(enteredUsername,enteredAge);
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const userNameChangeHandler = (p) => {
        setEnteredUsername(p.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
     const errorHandler=()=>{
         setError(null);
     }
    return (
        <div>       
       { error && <ErrorModal title={error.title} message={error.message} onHandleError={errorHandler} />}
        <Card className={classes.input} >
            <form onSubmit={addUserHandler} >
                <label htmlFor='username'>UserName : </label>
                <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler}></input>
                <label htmlFor='age'>Age(Year) :</label>
                <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
            
        </Card>
        </div>
    );
}

export default AddUser;