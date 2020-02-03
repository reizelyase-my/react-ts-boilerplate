export interface State {
    todos: Todo[]
    fetched: boolean
    fetching: boolean
    error: any
}

export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}