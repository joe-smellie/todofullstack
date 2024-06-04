export interface Task {
    task: string
    priority: string
    completed: boolean
}

export interface NewTask extends Task {
    id: number
}

export type Id = number