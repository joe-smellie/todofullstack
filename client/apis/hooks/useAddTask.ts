import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "../apiClient";
import { Task } from "../../../models/tasks";

export default function useAddTask() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (newTask: Task) => {
            addTask(newTask)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']})
        },
    })
}