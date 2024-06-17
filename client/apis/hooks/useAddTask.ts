import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "../apiLink";
import { NewTask } from "../../../models/tasks";

export default function useCompletedTask() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (task: NewTask) => {
            addTask(task)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']})
        },
    })
}