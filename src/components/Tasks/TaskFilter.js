import React from 'react';

import './TaskFilter.css';

const TaskFilter = (props) => {
    const filterYearHandler = (year) => {
        props.onChangeFilter(year.target.value)
    }

    return (
        <div className='task-filter'>
            <div className='task-filter__control'>
                <label>Filter by year</label>
                <select onChange={filterYearHandler} value={props.selected.value}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default TaskFilter;