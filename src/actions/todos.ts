const actions = {
    GET_ALL_TODOS_REQUEST:'GET_ALL_TODOS_REQUEST',
    GET_ALL_TODOS_REQUEST_SUCCESS:'GET_ALL_TODOS_REQUEST_SUCCESS',
    GET_ALL_TODOS_REQUEST_ERROR:'GET_ALL_TODOS_REQUEST_ERROR',
    
    getAllTodos: () => ({
      type: actions.GET_ALL_TODOS_REQUEST
    })
}

export default actions;