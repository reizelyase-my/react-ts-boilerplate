import * as React from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { HeaderProps } from '../../types/global'
import './listTable.scss'

interface Props {
  headers: HeaderProps[]
  listContent: any
  loading: boolean
  error: any
}

const ListTable = ({
  error,
  loading,
  headers,
  listContent
}: Props) => {
  return loading ? 
    <Spinner animation="grow" /> :
    <Table striped bordered hover>
      { 
        headers && <thead>
          <tr>
            { headers.map((h: HeaderProps, i: number) => <th key={i}>{h.label}</th>)}
          </tr>
        </thead>
      }
      { listContent }
    </Table>
}

export default ListTable