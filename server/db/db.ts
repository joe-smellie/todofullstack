import connection from "./connection";
import {Task, NewTask, Id} from '../../models/tasks'

const db = connection

export async function getTasks(): Promise<Task[]> {
    const tasks = await db('tasks').select()
    return tasks
}

export async function getTaskById(id: Id): Promise<Task> {
    return db('tasks').where({ id }).select().first()
}

export async function addTask(tasks: NewTask) {
    return db('tasks').insert({...tasks})
}

export async function deleteTaskById(id: Id) {
   return db('tasks').where({ id }).del()
}
