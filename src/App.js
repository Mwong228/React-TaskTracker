import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    init()
  },[])

  async function init(){
    const res = await fetch('http://localhost:5000/tasks').then(r=> r.json())
    setTasks(res)
  }

  //Fetch Task
  async function fetchTask(id){
    const res = await fetch(`http://localhost:5000/tasks/${id}`).then(r=> r.json())

    return res

  }

  //Add Task
  async function addTask(task){
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: `POST`,
      headers : {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(task)
    }).then(r=> r.json())

    setTasks([...tasks, res])


    // const id = Math.floor(Math.random()*1000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  //Delete Task
  async function deleteTask(id){
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter( task => task.id !== id))
  }

  //Toggle Reminder
  async function toggleReminder(id){

    const taskToggle = await fetchTask(id)
    const updateTask = {...taskToggle, reminder: !taskToggle.reminder}

    const res = await fetch (`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      header: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updateTask)
    }).then(r=>r.json())

    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task ))
  }

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0 ?<Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> : "No Tasks To Show"}
    </div>
  );
}


export default App;
