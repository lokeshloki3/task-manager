import React, { memo, useContext } from 'react'
import { AppContext } from '../context/AppContext';

const TaskItem = memo(({ task }) => {

    const { toggleTask, deleteTask } = useContext(AppContext);

    return (
        <div>
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
        </div>
    )
});

export default TaskItem;