import * as React from 'react'
import { connect } from 'react-redux'

const Todos = () => {
    return <div>Todos</div>
}

const mapStateToProps = (state: any) => {
    return {
        todos: state.todo.todos
    }
}

export default connect(mapStateToProps)(Todos)