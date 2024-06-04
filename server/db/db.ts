import connection from "./connection";

const db = connection

export async function getTasks(): Promise<Task[]> {
    const tasks = await db('tasks').select()
    return tasks
}

export async function getTaskById(id: number): Promise<Task> {
    return db('tasks').where({ id }).select().first()
}

export async function addTask(newTask: Task) {
    return db('tasks').insert(newTask)
}