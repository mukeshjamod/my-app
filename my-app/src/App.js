import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App; 
 // import logo from './logo.svg';
// import './App.css';
// import Testt from "./components/Test"
// import ExpenseItem from './components/ExpenseItem';
// function App() {
//   const product = [{
//     Number: 1,
//     PRICE: 10,
//     DESCRIPTION: 'First product',

//   },
//   {
//     Number: 2,
//     PRICE: 20,
//     DESCRIPTION: 'Second product',

//   }];

//   return (
//     <div>
//       <h1>My Demo Shop</h1>
//       <ExpenseItem TITTLE={product[0].Number}
//         PRICE={product[0].PRICE}
//         DESCRIPTION={product[0].DESCRIPTION}
//       ></ExpenseItem>
//       <ExpenseItem TITTLE={product[1].TITTLE}
//         PRICE={product[1].PRICE}
//         DESCRIPTION={product[1].DESCRIPTION}></ExpenseItem>
//         <Testt />
//     </div>
//   );
// }
// export default App;
