import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food',
      day: '02/20/2021',
      reminder: true
    },
    {
      id: 2,
      text: 'Shopping',
      day: '05/25/2021',
      reminder: false
    },
    {
      id: 3,
      text: 'Hair Cut',
      day: '06/28/2021',
      reminder: false
    }
  ])

  //Add Task
  function addTask(task){
    const id = Math.floor(Math.random()*1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  function deleteTask(id){
    setTasks(tasks.filter( task => task.id !== id))
  }

  //Toggle Reminder
  function toggleReminder(id){
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task ))
    console.log('toggle')
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
