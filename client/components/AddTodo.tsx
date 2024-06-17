import React, { ChangeEvent } from "react"
import { useState } from "react"
import { Task } from "../../models/tasks"

import useAddTask from "../apis/hooks/useAddTask"

// eslint-disable-next-line no-unused-vars
function TaskForm() {
  const [newTask, setNewTask] = useState('')
  const addTask = useAddTask()

  const handleChange =( e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

  if (newTask.length < 1) return

  const task: Task = {
    id: NaN,
    taskDetails: newTask,
    priority: 'High',
    completed: false,
  }

 await addTask.mutateAsync(task)
  setNewTask('')

}
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-task"
          aria-labelledby="newTask"
          type="text"
          placeholder="add a new task"
          value={newTask}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default TaskForm
