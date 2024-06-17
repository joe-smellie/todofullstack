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

export async function addTask(taskDetails: Task) {
    return db('tasks').insert({taskDetails})
}

export async function deleteTaskById(id: Id) {
   return db('tasks').where({ id }).del()
}

export async function completedTask(id: Id) {
    return db('tasks').where({ id }).update('completed', true)
}

export async function incompletedTask(id: Id) {
    return db('task').where({ id }).update('incomplete', true)
    
}
