import React, { useContext, useMemo, useState } from 'react'
import { AppContext } from '../context/AppContext'
import TaskItem from './TaskItem';

const TaskList = () => {

    const { tasks } = useContext(AppContext);
    const [filter, setFilter] = useState("all");

    const filteredTasks = useMemo(() => {
        if (filter === "completed") {
            return tasks.filter(task => task.completed);
        } else if (filter === "pending") {
            return tasks.filter(task => !task.completed);
        }
        return tasks;
    }, [tasks, filter])

    return (
        <div>
            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
                <button onClick={() => setFilter("pending")}>Pending</button>
            </div>
            {
                filteredTasks.map((task) => {
                    <TaskItem key={task.id} task={task} />
                })
            }
        </div>
    )
}

export default TaskList;