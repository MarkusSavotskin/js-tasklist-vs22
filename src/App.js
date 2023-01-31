import './App.css';

import './components/Tasks/TaskItem'
import Tasks from './components/Tasks/Tasks';
import NewTask from "./components/NewExpense/NewTask";
import {useState} from "react";


const DUMMY_TASKS = [
    {
        id: 'e1',
        date: new Date(2023, 0, 10),
        title: 'Read book',
        priority: 'Low'
    },
    {
        id: 'e2',
        date: new Date(2023, 0, 5),
        title: 'Strecth',
        priority: 'medium'
    },
    {
        id: 'e3',
        date: new Date(2023, 3, 8),
        title: 'Play guitar',
        priority: 'high'
    },
    {
        id: 'e4',
        date: new Date(2024, 5, 12),
        title: 'Sleep',
        priority: 'high'
    }
]
const App = () => {
    const [tasks, setTasks] = useState(DUMMY_TASKS)
    const addTaskHandler = (task) => {
        console.log('In App.js')
        setTasks((previousTasks) => {
            return [task, ...previousTasks]
        })
    }
    console.log(tasks)

    return (
        <div className="App">
            <NewTask onAddTask={addTaskHandler}></NewTask>
            <Tasks taskData={tasks}></Tasks>
        </div>
    );
}

export default App;
