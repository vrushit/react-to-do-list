import Task from './Task';

const Tasks = ({ task }) => {
    return (
        <>
        {task.map((task) => (
            <Task key={task.id} task = {task} />
        ))}
        </>
    )
}

export default Tasks
