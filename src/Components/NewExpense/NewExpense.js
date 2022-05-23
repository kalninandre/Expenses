import React from 'react';

import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const expenseDataHandler = (expenseData) => {
        expenseData = {
            ...expenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <NewExpenseForm onSubmitExpenseData={expenseDataHandler} />
        </div>
    );
};

export default NewExpense;
