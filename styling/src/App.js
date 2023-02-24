import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';

import UsersList from './components/Users/UsersList';
// don't change the Component name "App"
 function App() { 
    const[usersList, setUsersList] = useState([]);
    
      
         const addUserHandler = (uName, uAge) =>{
            setUsersList((prevUserList) =>{
                return [
                    ...prevUserList,
                    { name:uName, age:uAge, id: Math.random().toString() },
                ];
            });
         };
          
    return (
        <div>
            <AddUser  onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div> 
    );
    
}
export default App;

//     const [highLight,setHighLight] = React.useState(false);
    
//     function goalInputChangeHandler(){
//         setHighLight(isHighlight => !isHighlight);
        
//     }
//     return (
//         <div>
//             <p Style={{color: highLight ? 'red' : 'white'}}>Style me!</p>
//             <button onClick={goalInputChangeHandler}>Toggle style</button>
//         </div>
//     );
// }
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
