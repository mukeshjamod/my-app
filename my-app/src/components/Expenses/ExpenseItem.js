import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
// import './ExpenseItem.css';


// export default function ExpenseItem(props) {
//     return (
//         <article className="product">
//             <h2>Product{props.Number}</h2>
//             <p className="price">${props.PRICE}</p>
//             <p>{props.DESCRIPTION}</p>
//         </article>
//     );
// }
// function ExpenseItem()
// {  const expenseDate = new Date(2021,2,28);
//     const expenseTitle = 'Car Insurance';
//     const expenseAmount = 294.67;
//     return (
//         <div className='expense_description'>
//             <div>{expenseDate.toISOString()}</div>
//             <div className='expense_item'>
//                 <h2>
//                    {expenseTitle} 
//                 </h2>
//                 <div>
//                     ${expenseAmount}
//                 </div>
//             </div>
//         </div>
//     );
// }
//export default ExpenseItem;