import ExpenseDate from './ExpenseDate.js';
import Card from '../../Card/Card.js';
import './ExpenseItem.css';

function ExpenseItem (props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item-description'>
            <h2>{props.title}</h2>
            </div>
            <div className='expense-item-price'>R$ {props.amount}</div>
        </Card>
    );
}

export default ExpenseItem;