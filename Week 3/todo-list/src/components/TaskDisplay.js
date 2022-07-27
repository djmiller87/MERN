import React, {useState} from 'react';

const TaskDisplay = (props) => {
    const {taskString, currentTasks, setCurrentTasks, id} = props;

    const[status, setStatus] = useState(false)

    const handleClick = () =>{
        status == false ? setStatus(true) : setStatus(false)
    }

    const deleteTask = () => {
        const newList = currentTasks.filter((t) => t.id !== id)
        setCurrentTasks(newList)
    }
    return (
            <div className='d-flex align-items-center' >
                <h1 className='d-inline' style={{textDecoration: status ? 'line-through': ''}}>{taskString}</h1>
                <input type="checkbox" onClick={handleClick} className='d-inline ms-4'></input>
                <button onClick={deleteTask} className='bg-danger ms-4 d-inline'>Delete</button>
            </div>

    );
};
    
export default TaskDisplay;

