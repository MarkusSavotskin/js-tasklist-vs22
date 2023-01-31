import React, {useState} from "react";
import './Tasks.css'

import Card from '../UI/Card'
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";

const Tasks = (props) => {

    const [filteredYear, setFilteredYear] = useState(2023)

    console.log('Year data in Expense.js ' + filteredYear)

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Tasks.js')
        console.log(year + ' in Tasks.js')
        setFilteredYear(year)
    }
    const filteredTasks = props.taskData.filter((task) => {
        return task.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card className='tasks'>
            <TaskFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></TaskFilter>
            <TaskList filteredTasks={filteredTasks}></TaskList>
        </Card>
    )
}

export default Tasks