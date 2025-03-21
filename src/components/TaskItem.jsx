import React, { memo, useContext } from 'react'
import { AppContext } from '../context/AppContext';

const TaskItem = memo(({ task }) => {

    const { toggleTask, deleteTask } = useContext(AppContext);

    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="mr-2 cursor-pointer"
            />
            <span className={task.completed ? "line-through text-gray-500" : ""}>
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
        </div>
    )
});

export default TaskItem;