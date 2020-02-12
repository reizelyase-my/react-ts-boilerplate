import actions from '@actions/todos'
import { State } from '@typings/todo'

const initialState: State = {
    todos: [],
    fetched: false,
    fetching: false,
    error: {},
    currentPage: 1,
    limit: 10,
    numPages: 1
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
        case actions.SET_CURRENT_PAGE_REQUEST:
          return {
            ...state,
            currentPage: action.currentPage
          }
        case actions.SET_CURRENT_PAGE_ERROR:
          return {
            ...state,
            currentPage: 1
          }
        case actions.SET_LIMIT_REQUEST:
          return {
            ...state,
            limit: action.limit
          }
        case actions.SET_LIMIT_ERROR:
          return {
            ...state,
            limit: 10
          }
        case actions.SET_NUM_PAGES_REQUEST:
          return {
            ...state,
            numPages: action.numPages
          }
        case actions.SET_NUM_PAGES_ERROR:
          return {
            ...state,
            numPages: 1
          }
        default:
          return state;
    }
}