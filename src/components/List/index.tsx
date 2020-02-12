import * as React from 'react'
import { connect } from 'react-redux'
import { HeaderProps, ListType } from '@typings/global'
import { setNumPages, setCurrentPage } from '@actions/todos'
import ListTable from '@components/ListTable'
import './list.scss'

interface Props {
  dataSource: string
  headers: HeaderProps[]
  layout?: ListType
  getListContent: (i: any[]) => any
  page?: number
  limit?: number
  dispatch: any
  currentPage: number
  numPages: number
}

interface HOCProps {
  dataSource: string
  page?: number
  limit?: number
  dispatch: any
}

const useDataFetching = ({
  dataSource,
  page = 1,
  limit = 10,
  dispatch
}: HOCProps) => {
  const baseUrl = `https://jsonplaceholder.typicode.com/${dataSource}`
  const [items, setItems] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<any>(null)
  const [pageCount, setPageCount] = React.useState<number>(0)

  const fetchData = async(url: string, callback?: (x: any) => void) => {
    setLoading(true)

    try {
      const apiURL = await fetch(url)
      const response = await apiURL.json()

      if (response) {
        setItems(response)
        setLoading(false)

        if (callback) {
          callback(response)
        }
      }
    } catch(error) {
      setItems([])
      setLoading(false)
      setError(error)
    }
  }

  React.useEffect(() => {
    fetchData(baseUrl, (res) => {
      const numPages = res.length % limit === 0 ? res.length / limit : (res.length / limit) + 1

      setPageCount(res.length)
      dispatch(setNumPages(numPages))
    })
  }, [dataSource])

  React.useEffect(() => {
    if (pageCount) {
      fetchData(baseUrl + `?_page=${page}&_limit=${limit}`)
    }
  }, [pageCount, page])

  return {
    items,
    loading,
    error
  }
}

const List = ({
  dataSource, 
  headers,
  getListContent,
  layout = ListType.TABLE,
  currentPage,
  numPages,
  dispatch
}: Props) => {
  let listComponent
  const { items, loading, error } = useDataFetching({
    dataSource, 
    page: currentPage,
    dispatch
  })

  switch(layout) {
    default:
      listComponent = <ListTable 
        headers={headers} 
        listContent={getListContent(items)} 
        loading={loading}
        error={error}
        currentPage={currentPage}
        numPages={numPages}
        setCurrentPage={ (x: number) => dispatch(setCurrentPage(x))}
      />
      break;
  }

  return listComponent
}

export default connect()(List)