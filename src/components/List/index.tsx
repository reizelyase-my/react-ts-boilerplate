import * as React from 'react'
import { useDispatch } from 'react-redux'
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
  currentPage: number
  numPages: number
}

const List = ({
  dataSource, 
  headers,
  getListContent,
  layout = ListType.TABLE,
  currentPage = 1,
  numPages
}: Props) => {
  let listComponent
  const dispatch = useDispatch()
  const limit = 10
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
      fetchData(baseUrl + `?_page=${currentPage}&_limit=${limit}`)
    }
  }, [pageCount, currentPage])

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

export default List