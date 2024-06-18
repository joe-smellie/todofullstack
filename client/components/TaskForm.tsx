import  React from "react"
import { useState } from "react"
import { Task } from "../../models/tasks"


import useAddTask from "../apis/hooks/useAddTask"

// eslint-disable-next-line no-unused-vars
function TaskForm() {
  const [newTasks, setNewTask] = useState('')
  const addTask = useAddTask()

  const handleChange =( e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

  if (newTasks.length < 1) return

  const newTask: Task = {
    id: NaN,
    taskDetails: newTasks,
    priority: 'High',
    completed: false,
  }

 await addTask.mutateAsync(newTask)
}
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-task"
          aria-labelledby="newTask"
          type="text"
          placeholder="add a new task"
          value={newTasks}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default TaskForm
