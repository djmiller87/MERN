import React, { useState } from 'react';
import {nanoid} from 'nanoid';

const TaskForm = (props) => {

        const { currentTasks, setCurrentTasks } = props;

        const [taskString, setTaskString] = useState("");
        const handleSubmit = (e) => {
                e.preventDefault();
                // what should we do with the message?

                const newTask = {
                        content: taskString,
                        id: nanoid()
                }
                
                setCurrentTasks([...currentTasks, newTask]);
                setTaskString('')
        };
        return (
                <div className="form-control">
                        <form onSubmit={handleSubmit} >
                                <h1>Add a new task</h1>
                                <input
                                        placeholder="Enter a task here"
                                        onChange={(e) => setTaskString(e.target.value)}
                                        value={taskString}
                                ></input>
                                <input type="submit" value="Add Task" />
                        </form>
                </div>
        );
};
export default TaskForm;
