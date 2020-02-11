import * as React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import { setPageTitle } from '@actions/global'
import { HeaderProps } from '../../types/global'
import { Todo } from '../../types/todo'
import List from '@components/List'
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

const Todos = ({ dispatch }: any) => {
    const getListContent = (items: any[]) => {
        return <tbody>
        { !items.length ?
            <tr>
                <td colSpan={headers.length}></td>
            </tr> :
            items.map((item: Todo, index: number) => <tr key={index}>
                <td>
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
    />
}

export default connect()(Todos)