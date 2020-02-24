import { combineReducers } from 'redux'
import { State as GlobalState } from '@typings/global'
import { State as TodosState } from '@typings/todo'
import global from './global'
import todos from './todos'

export interface State {
    global: GlobalState
    todos: TodosState
}

export default combineReducers ({
    global,
    todos
})