import Card from '../../Card/Card.js';

import ExpensesFilter from './ExpenseFilter.js';
import ExpenseList from './ExpenseList.js';
import Chart from '../Chart/Chart.js';

import { React, useState } from 'react';

import './Expenses.css';

function Expenses (props) {
    const [initialYear, setYear] = useState('2022');
    
    const filterHandler = (year) => {
       setYear(year);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === initialYear;
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter
            onFilterChange={filterHandler}
            initialYear={initialYear}
            />
            <Chart
            expenses={filteredExpenses}
            />
            <ExpenseList
           expenses={filteredExpenses}
            />
        </Card>
    );
}

export default Expenses
