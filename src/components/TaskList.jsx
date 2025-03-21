import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import TaskItem from './TaskItem';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import "../App.css";

const TaskList = () => {
    const { tasks, setTasks } = useContext(AppContext);
    console.log(tasks)

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const reorderedTasks = [...tasks];
        const [movedTask] = reorderedTasks.splice(source.index, 1);
        reorderedTasks.splice(destination.index, 0, movedTask);
        console.log("reorderedTasks", tasks, reorderedTasks, result, movedTask)
        setTasks(reorderedTasks);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div className="tasks" ref={provided.innerRef} {...provided.droppableProps}>
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                {(provided) => (
                                    <div
                                    className='m-2'
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <TaskItem task={task} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TaskList;