import React from "react";
import { Task } from "../../models/tasks";
import useCompletedTask from "../apis/hooks/useCompletedTask";
import useIncompleteTask from "../apis/hooks/useIncompleteTasks";



export default function Todo(task: Task) {
    const completeTask = useCompletedTask()
    const incompleteTask = useIncompleteTask()

    const toggleTaskStatus = async (e: React.MouseEvent<HTMLInputElement>) => {
        const id = Number(e.currentTarget.id)

        if (e.currentTarget.checked === true) complete(id)

        if (e.currentTarget.checked === false) incomplete(id)
    }
    
    const complete = async (id: number) => {
        completeTask.mutate(id)
    }

    const incomplete = async (id: number) => {
        incompleteTask.mutate(id)
    }


    
    return (
        <>
            <li className={task.completed ? 'completed' : ''}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onClick={toggleTaskStatus}
                        defaultChecked={task.completed ? true : false}
                        id={`${task.id}`}
                    />
                    <label htmlFor={`${task.id}`} id={`${task.id}`}>
                        {task.taskDetails}
                    </label>
                    <button className="delete" aria-labelledby={`${task.id}`}></button>
                </div>
            </li>
        </>
    )
}