import * as React from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { HeaderProps } from '@typings/global'
import Pages from '@components/Pagination'
import * as styles from './listTable.scss'

interface Props {
  headers: HeaderProps[]
  listContent: any
  loading: boolean
  error: any
  currentPage: number
  numPages: number
  setCurrentPage: (x: number) => void
}

const ListTable = ({
  error,
  loading,
  headers,
  listContent,
  currentPage,
  numPages,
  setCurrentPage
}: Props) => {
  return loading ? 
    <Spinner animation="grow" variant="info" /> :
    <div className={styles.listWrapper}>
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
      <Pages numPages={numPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
}

export default ListTable