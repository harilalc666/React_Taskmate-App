import React from 'react'

export const Addtask = ({ taskList, setTaskList, task, setTask }) => {

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(task.id){
            const date = new Date();
            const updatTask = taskList.map((todo) => (
                todo.id == task.id ? {id: date.getTime(), name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ))
                setTaskList(updatTask);
                setTask({});
        }
        else{
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
    
            setTaskList([...taskList, newTask]);
            setTask({});
        }
    }

  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='add task' autoComplete='off' name='task' value={task.name || ""} onChange={e=> setTask({...task, name: e.target.value})} />
            <button type='submit'>{ task.id ? "update" : "Add" }</button>
        </form>
    </section>

  )
}

