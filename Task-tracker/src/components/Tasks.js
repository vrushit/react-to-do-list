import Task from './Task';

const Tasks = ({ task, onDelete }) => {
    return (
        <>
        {task.map((task) => (
            <Task key={task.id} task = {task}  onDelete= { onDelete}/>
        ))}
        </>
    )
}

export default Tasks
