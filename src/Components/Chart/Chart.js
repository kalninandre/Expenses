import React from 'react';

import ChartBar from './ChartBar.js';

import './Chart.css';

const Chart = ({ expenses }) => {
    const chartData = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of expenses) {
        const month = expense.date.getMonth();
        chartData[month].value += expense.amount;
    }

    const maximumArray = chartData.map((data) => {
        return data.value;
    });

    const maximum = Math.max(...maximumArray);

    return (
        <div className='chart'>
            {chartData.map((data) => (
                <ChartBar
                    key={data.label}
                    label={data.label}
                    value={data.value}
                    max={maximum}
                />
            ))}
        </div>
    );
};

export default Chart;
