import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
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
    },
    {
      id: 3,
      text: 'Hair Cut',
      day: '06/28/2021',
      reminder: false
    }
  ])

  //Delete Task
  function deleteTask(id){
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}


export default App;
