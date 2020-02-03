import * as React from 'react'
import { connect } from 'react-redux'
import { setPageTitle } from '@actions/global'
import { getAllTodos } from '@actions/todos'
import { Todo } from '../../types/todo'
import { NotificationType } from '../../types/global'
import { notify } from '@utils/global'
import * as styles from './todos.scss'

const Todos = ({ 
    todos, 
    fetched,
    fetching, 
    error,
    dispatch
}: { 
    todos: Todo[], 
    fetched: boolean, 
    fetching: boolean, 
    error: any, 
    dispatch: any 
}) => {
    React.useEffect(() => {
        dispatch(setPageTitle("Todos"))
    })

    React.useEffect(() => {
        if (!fetching && !fetched) {
            dispatch(getAllTodos())
        }

        if (!fetching && !!fetched && error) {
            notify(NotificationType.ERROR, error)
        }
    }, [fetched, fetching, error])

    return <div>Todos</div>
}

const mapStateToProps = (state: any) => ({
    todos: state.todo.todos,
    fetched: state.todo.fetched,
    fetching: state.todo.fetching,
    error: state.todo.error
})

export default connect(mapStateToProps)(Todos)