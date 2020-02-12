export interface State {
    todos: Todo[]
    fetched: boolean
    fetching: boolean
    error: any
    currentPage: number
    limit: number
    numPages: number
}

export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}