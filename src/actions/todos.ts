const actions = {
    GET_ALL_TODOS_REQUEST:'GET_ALL_TODOS_REQUEST',
    GET_ALL_TODOS_REQUEST_SUCCESS:'GET_ALL_TODOS_REQUEST_SUCCESS',
    GET_ALL_TODOS_REQUEST_ERROR:'GET_ALL_TODOS_REQUEST_ERROR',
    SET_CURRENT_PAGE_REQUEST: 'SET_CURRENT_PAGE_REQUEST',
    SET_CURRENT_PAGE_ERROR: 'SET_CURRENT_PAGE_ERROR',
    SET_LIMIT_REQUEST: 'SET_LIMIT_REQUEST',
    SET_LIMIT_ERROR: 'SET_LIMIT_ERROR',
    SET_NUM_PAGES_REQUEST: 'SET_NUM_PAGES_REQUEST',
    SET_NUM_PAGES_ERROR: 'SET_NUM_PAGES_ERROR'
}

export default actions;

export const getAllTodos = () => ({
  type: actions.GET_ALL_TODOS_REQUEST
})

export const setCurrentPage = (currentPage: number) => ({
  type: actions.SET_CURRENT_PAGE_REQUEST,
  currentPage
})

export const setLimit = (limit: number) => ({
  type: actions.SET_LIMIT_REQUEST,
  limit
})

export const setNumPages = (numPages: number) => ({
  type: actions.SET_NUM_PAGES_REQUEST,
  numPages
})