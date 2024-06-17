import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../apis/apiClient";
import Todo from "./Todos";


export default function ListTasks() {

    const {
        data,
        error,
        isLoading, 
    } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => getTasks()
    })


    if (error) {
        return <p>No tasks to show</p>
    }
    if (isLoading) {
        return <p>Loading tasks...</p>
    }


    return (
        <>
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all complete</label>
                <ul className="task-list">
                {data?.map((task, i) => {
                    return (
                        <Todo 
                            key={i}
                            id={task.id}
                            taskDetails={task.taskDetails}
                            priority={task.priority}
                            completed={task.completed}
                            />
                    )
                })}
                </ul>
        </>
    )
}

