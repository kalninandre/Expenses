import { useState } from 'react';

import Expenses from './Components/Expenses/Expenses.js';
import NewExpense from './Components/NewExpense/NewExpense.js'

function App () {

  const initialExpenses = [
    {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 4),
    },
    {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
    },
    {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
    },
    {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    }
  ];

  const [expenses, setExpenses] = useState(initialExpenses)

  const addExpenseHandler = (expense) => {
      setExpenses([expense, ...expenses]);
  }

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses 
        expenses={expenses}
        />
    </div>
  )
}

export default App;