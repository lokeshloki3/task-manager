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
        <div>
            <form onSubmit={handleAddTask}>
                <input
                    type='text'
                    placeholder='Add task'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    required
                />
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default TaskForm