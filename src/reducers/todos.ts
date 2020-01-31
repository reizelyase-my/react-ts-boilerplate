import actions from '../actions/todos'
import { State } from '../types/todo'

const initialState: State = {
    todos: []
}

export default function todos(state = initialState, action: any) {
    switch (action.type) {
        case actions.GET_ALL_TODOS_REQUEST:
          return {
            ...state
          };
        case actions.GET_ALL_TODOS_REQUEST_SUCCESS:
          return {
            ...state,
            todos: action.todos
          };
        default:
          return state;
    }
}