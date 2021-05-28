import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)


    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input
                    type='text'
                    placeholder='Add Day and Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input
                    type='checkbox'
                    placeholder='Add Reminder'
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='Submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
