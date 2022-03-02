import React, { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

    const [showExpensesForm, setShowExpensesForm] = useState(false);

    const [enteredTitle, setUserTitle] = useState('');
    const [enteredAmount, setUserAmount] = useState('');
    const [enteredDate, setUserDate] = useState('');

    const titleChangeHandler = (event) => {
        setUserTitle(event.target.value)
    };
    
    const amountChangeHandler = (event) => {
        setUserAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setUserDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSubmitExpenseData(expenseData);

        setUserTitle('');
        setUserAmount('');
        setUserDate('');
    };

    const showExpensesFormHandler = () => {
        setShowExpensesForm(!showExpensesForm);
    };

    if (showExpensesForm === false) 
    {
        return (
            <div className='new-expense-action'>
                <button type='submit' onClick={showExpensesFormHandler}>Add Expense</button> 
            </div>
        );
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text' 
                    value={enteredTitle} 
                    onChange={titleChangeHandler}>
                    </input>
                </div>

                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' 
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                    min='0.1'
                    step='0.1'>
                    </input>
                </div>

                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date'
                    value={enteredDate}
                    onChange={dateChangeHandler}
                    min='2019-01-01'
                    max='2022/31/31'>
                    </input>
                </div>
            </div>

            <div className='new-expense-action'>
                <button type='text' onClick={showExpensesFormHandler}>Cancel</button> 
                <button type='submit'>Add Expense</button> 
            </div>

        </form>
    )
}  

export default NewExpenseForm;