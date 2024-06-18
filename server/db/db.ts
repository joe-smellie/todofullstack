import connection from "./connection";
import { Task } from '../../models/tasks'

const db = connection

export async function getTasks(): Promise<Task[]> {
    const tasks = await db('tasks').select()
    return tasks
}

export async function getTaskById(id: number): Promise<Task> {
    return db('tasks').where({ id }).select().first()
}

export async function addTask(taskDetails: Task) {
    return db('tasks').insert(taskDetails)
}

export async function deleteTaskById(id: number) {
   return db('tasks').where({ id }).del()
}

export async function completedTask(id: number) {
    return db('tasks').where({ id }).update('completed', true)
}

export async function incompletedTask(id: number) {
    return db('tasks').where({ id }).update('completed', false)
    
}
