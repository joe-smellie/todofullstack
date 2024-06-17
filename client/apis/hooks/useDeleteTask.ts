import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTaskById } from "../apiLink";
import { Id } from "../../../models/tasks";

export default function useCompletedTask() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: Id) => {
            deleteTaskById(id)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']})
        },
    })
}