import { useQuery } from "@tanstack/react-query";
import { Task } from "../../models/tasks";
import { getTasks } from "../apis/apiLink";
import Todo from "./Todos";

export default function ListTodos() {

    const {
        data,
        error,
        isLoading, 
    } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks
    })


    if (error) {
        return <p>No todos to show</p>
    }
    if (isLoading) {
        return <p>Loading todos...</p>
    }


    return (
        <>
            <div className="list-all-todo">
                {data?.map((task, i) => (
                    <Todo key={i} task={task} />
                ))}
            </div>
        </>
    )
}