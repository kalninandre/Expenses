import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const selectHandler = (event) => {
        let year = event.target.value;
        props.onFilterChange(year);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter_control'>
                <label>Filter by Year</label>
                <select onChange={selectHandler} value={props.initialYear}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
