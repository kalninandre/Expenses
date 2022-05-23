import './ExpenseList.css';

import ExpenseItem from './ExpenseItem.js';

const ExpenseList = (props) => {
    if (props.expenses.length === 0) {
        let expenseContent = (
            <h2 className='expenses-list-fallback'>No expenses found</h2>
        );
        return expenseContent;
    }

    return (
        <ul className='expenses-list'>
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;
