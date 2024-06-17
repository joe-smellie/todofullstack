import request from "superagent"
import { Task, NewTask} from "../../models/tasks"

const rootURL = '/api/v1/tasks'

export async function getTasks(): Promise<Task[]> {
    const res = await request.get(rootURL)
    return res.body
}

export async function getTaskById(id: number) {
    const res = await request.get(`${rootURL}/${id}`)
    return res.body
}

export async function addTask(taskDetails: Task) {
    await request.post(rootURL).send(taskDetails)
}

export async function deleteTaskById(id: number) {
    await request.delete(`${rootURL}/${id}`)
 }

export async function completedTask(id: number): Promise<void> {
    const res = await request.patch(`${rootURL}/complete${id}`)
    return res.body
}

export async function incompletedTask(id: number) {
    const res = await request.patch(`${rootURL}/incomplete${id}`)
    return res.body
}

