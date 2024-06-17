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
        queryFn: getTasks
    })


    if (error) {
        return <p>No tasks to show</p>
    }
    if (isLoading) {
        return <p>Loading tasks...</p>
    }


    return (
        <>
            <div className="list-all-tasks">
                {data?.map((task, i) => (
                    <Todo key={i} task={task} />
                ))}
            </div>
        </>
    )
}