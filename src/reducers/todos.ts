import actions from '@actions/todos'
import { State } from '../types/todo'

const initialState: State = {
    todos: [],
    fetched: false,
    fetching: false,
    error: {}
}

export default function todos(state = initialState, action: any) {
    switch (action.type) {
        case actions.GET_ALL_TODOS_REQUEST:
          return {
            ...state,
            fetching: true
          };
        case actions.GET_ALL_TODOS_REQUEST_SUCCESS:
          return {
            ...state,
            todos: action.todos,
            fetched: true,
            fetching: false
          };
        case actions.GET_ALL_TODOS_REQUEST_ERROR:
          return {
            ...state,
            todos: [],
            fetched: true,
            fetching: false,
            error: action.error
          };
        default:
          return state;
    }
}