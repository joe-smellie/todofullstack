import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTaskById } from "../apiClient";


export default function useDeleteTask() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: number) => {
            deleteTaskById(id)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']})
        },
    })
}