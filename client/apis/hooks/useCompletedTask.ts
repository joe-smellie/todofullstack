import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completedTask } from "../apiClient";


export default function useCompletedTask() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: number) => {
            await completedTask(id)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']})
        },
    })
}