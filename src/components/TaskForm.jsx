import React, { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';

const TaskForm = () => {
    const [text, setText] = useState("");
    // consume context
    const { addTask } = useContext(AppContext);

    const handleAddTask = (e) => {
        e.preventDefault();

        if (text.trim() === "") {
            return;
        } else {
            addTask(text);
            setText("");
        }
    }

    return (
        <div className='text-center flex flex-col'>
            <form onSubmit={handleAddTask}>
                <input
                    type='text'
                    placeholder='Add task'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    required
                    className='border rounded-2xl p-2 bg-white'
                />
                <button type='submit' className='bg-blue-100 m-4 p-2 rounded-2xl hover:bg-amber-300 hover:cursor-pointer'>Add Task</button>
            </form>
        </div>
    )
}

export default TaskForm