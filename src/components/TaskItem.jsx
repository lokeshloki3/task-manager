import React, { memo, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TaskItem = memo(({ task }) => {
    const { toggleTask, deleteTask } = useContext(AppContext);

    return (
        <div className='max-w-sm w-full mx-auto flex items-center justify-between bg-blue-50 text-xl p-3 border rounded-2xl shadow-md transition-all hover:bg-blue-100'>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 cursor-pointer accent-blue-500"
            />
            <span className={`flex-1 mx-4 text-center truncate ${task.completed ? "line-through text-red-500" : "text-gray-800"}`}>
                {task.text}
            </span>
            <button 
                onClick={() => deleteTask(task.id)} 
                className='bg-red-500 text-white px-3 py-1 rounded-lg shadow-md transition hover:bg-red-600 active:scale-95'
            >
                Delete
            </button>
        </div>
    );
});

export default TaskItem;
