import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incompletedTask } from "../apiClient";


export default function useIncompleteTask() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: number) => {
            incompletedTask(id)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']})
        },
    })
}