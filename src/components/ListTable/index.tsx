import * as React from 'react'
import { Pagination, Spinner, Table } from 'react-bootstrap'
import { setCurrentPage, setLimit } from '@actions/todos'
import { HeaderProps } from '@typings/global'
import * as styles from './listTable.scss'

const MAX_NUM_PAGES: number = 10

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
  const Pages = () => {
    let pages: any[] = []
    const exceedNumPagesLimit = numPages > MAX_NUM_PAGES
    let firstPage = (currentPage - 4) > 1 ? currentPage - 4 : 1
    let offsetFromFirst
    
    if ((currentPage + 5) < numPages) {
      if (currentPage - firstPage < 4) {
        offsetFromFirst = currentPage + 4 + Math.abs(4 - firstPage)
        console.log({offsetFromFirst})
      } else {
        offsetFromFirst = currentPage + 4
      }
    } else {
      offsetFromFirst = numPages - 1
    }

    // if (offsetFromFirst - currentPage < 4) {
    //   firstPage += (offsetFromFirst - currentPage)
    // } 

    for(let i: number = firstPage; i <= offsetFromFirst; i++) {
      pages.push(
        <Pagination.Item 
          key={i} 
          active={i === currentPage}
          disabled={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >{i}</Pagination.Item>
      )
    }
  
    if (exceedNumPagesLimit) {
      if (offsetFromFirst < numPages - 1) {
        pages.push(
          <Pagination.Ellipsis disabled={true} key={offsetFromFirst + 1} />
        )
      }

      pages.push(
        <Pagination.Item 
          key={offsetFromFirst + 2} 
          active={currentPage === numPages}
          disabled={currentPage === numPages}
          onClick={() => setCurrentPage(numPages)}
        >{numPages}</Pagination.Item>
      )
    }
  
    return <Pagination>
      { currentPage !== 1 && <Pagination.First /> }
      { currentPage - 1 > 0 && <Pagination.Prev /> }
      { pages }
      { offsetFromFirst < numPages - 1 && 
        <React.Fragment>
          <Pagination.Next />
          <Pagination.Last />
        </React.Fragment>
      }
    </Pagination>
  }

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
      <Pages />
    </div>
}

export default ListTable