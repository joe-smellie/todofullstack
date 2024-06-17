import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incompletedTask } from "../apiLink";
import { Id } from "../../../models/tasks";

export default function useCompletedTask() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: Id) => {
            incompletedTask(id)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']})
        },
    })
}