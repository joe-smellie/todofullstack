import request from "superagent"
import { Task, NewTask, Id } from "../../models/tasks"

const rootURL = '/api/v1/tasks'

export async function getTasks(): Promise<Task[]> {
    const res = await request.get(rootURL)
    return res.body
}

export async function getTaskById(id: Id) {
    const res = await request.get(`${rootURL}/${id}`)
    return res.body
}

export async function addTask(tasks: NewTask) {
    await request.post(rootURL).send(tasks)
}

export async function deleteTaskById(id: Id) {
    await request.delete(`${rootURL}/${id}`)
 }

export async function completedTask(id: Id) {
    const res = await request.patch(`${rootURL}/complete${id}`)
    return res.body
}

export async function incompletedTask(id: Id) {
    const res = await request.patch(`${rootURL}/incomplete${id}`)
    return res.body
}

