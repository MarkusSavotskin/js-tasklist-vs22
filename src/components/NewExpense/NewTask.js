import React, {useState} from "react";
import './NewTask.css'

import TaskForm from "./TaskForm";

const NewTask = (props) => {

    const [formEdit, setEditForm] = useState(false);

    const formEditHandler = () => {
        setEditForm(!formEdit)
    }

    const saveTaskDataHandler = (enteredExpenseData) => {
        const taskData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddTask(taskData)

    }
    if (formEdit) {
        return (
            <div className='new-task'>
                <TaskForm onSaveTaskData={saveTaskDataHandler} onSubmission={formEditHandler}></TaskForm>
            </div>
        )
    } else {
        return (
            <div className='new-task'>
                <button onClick={formEditHandler}>Add New Task</button>
            </div>
        )
    }
}

export default NewTask