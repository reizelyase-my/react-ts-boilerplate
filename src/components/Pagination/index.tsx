import * as React from 'react'
import { Pagination } from 'react-bootstrap'

const MAX_NUM_PAGES: number = 10

interface Props {
  currentPage: number
  numPages: number
  setCurrentPage: (x: number) => void
}

const Pages = ({
  currentPage,
  numPages,
  setCurrentPage
}: Props) => {
  let pages: any[] = []
    const exceedNumPagesLimit = numPages > MAX_NUM_PAGES
    let firstPage
    let offsetFromFirst

    if (currentPage - 4 > 1) {
      if (numPages - currentPage < 5) {
        firstPage = (currentPage - 4) - (5 - (numPages - currentPage))
      } else {
        firstPage = currentPage - 4
      }
    } else {
      firstPage = 1
    }
    
    if ((currentPage + 5) < numPages) {
      if (currentPage - firstPage < 4) {
        offsetFromFirst = currentPage + 4 + Math.abs(4 - firstPage)
      } else {
        offsetFromFirst = currentPage + 4
      }
    } else {
      offsetFromFirst = numPages - 1
    }

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
      { 
        currentPage !== 1 && 
        <Pagination.First 
          onClick={() => setCurrentPage(1)}
        /> 
      }
      { 
        currentPage - 1 > 0 && 
        <Pagination.Prev 
          onClick={() => setCurrentPage(currentPage - 1)}
        /> 
      }
      { pages }
      { offsetFromFirst < numPages - 1 && 
        <React.Fragment>
          <Pagination.Next 
            onClick={() => setCurrentPage(currentPage + 1)}
          />
          <Pagination.Last 
            onClick={() => setCurrentPage(numPages)}
          />
        </React.Fragment>
      }
    </Pagination>
}

export default Pages