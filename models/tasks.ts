export interface Task {
    id: number
    taskDetails: string
    priority: string
    completed: boolean
}

export interface NewTask extends Task {
    id: number
}
