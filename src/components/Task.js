import {useState } from 'react'

const Task = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Food',
            day: '02/20/2021',
            reminder: false
        },
        {
            id: 2,
            text: 'Shopping',
            day: '05/25/2021',
            reminder: false
        }
    ])
    return (
        <>
            {tasks.map(task => (
            <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Task
