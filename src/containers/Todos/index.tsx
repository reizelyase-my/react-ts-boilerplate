import * as React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import { setPageTitle } from '@actions/global'
import List from '@components/List'
import { HeaderProps } from '@typings/global'
import { Todo } from '@typings/todo'
import { State } from '@reducers'
import 'bootstrap/dist/css/bootstrap.min.css'

const headers: HeaderProps[] = [
    {
        label: "",
        fieldName: "completed"
    }, {
        label: "Title",
        fieldName: "title"
    }
]

const Todos = ({ currentPage, numPages, dispatch }: any) => {
    const getListContent = (items: any[]) => {
        return <tbody>
        { !items.length ?
            <tr>
                <td colSpan={headers.length}></td>
            </tr> :
            items.map((item: Todo, index: number) => <tr key={index}>
                <td align="center">
                    <Form.Check type="checkbox" defaultChecked={item.completed} />
                </td>
                <td>{item.title}</td>
            </tr>)
        }
        </tbody>
    }

    React.useEffect(() => {
        dispatch(setPageTitle("Todos"))
    })

    return <List 
        dataSource='todos'
        headers={headers}
        getListContent={getListContent}
        currentPage={currentPage}
        numPages={numPages}
    />
}

const mapStateToProps = (state: State) => ({
    currentPage: state.todos.currentPage,
    numPages: state.todos.numPages
})

export default connect(mapStateToProps)(Todos)