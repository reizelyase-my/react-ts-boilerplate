import * as React from 'react'
import { HeaderProps, ListType } from '../../types/global'
import ListTable from '../ListTable'
import './list.scss'

interface Props {
  dataSource: string
  headers: HeaderProps[]
  layout?: ListType
  getListContent: (i: any[]) => any
  page?: number
  limit?: number
}

const useDataFetching = (
  dataSource: string,
  page: number = 1,
  limit: number = 10
) => {
  const [items, setItems] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<any>(null)

  React.useEffect(() => {
    const fetchData = async() => {
      setLoading(true)

      try {
        const apiURL = await fetch(`https://jsonplaceholder.typicode.com/${dataSource}?_page=${page}&_limit=${limit}`)
        const response = await apiURL.json()

        if (response) {
          setItems(response)
          setLoading(false)
        }
      } catch(error) {
        setItems([])
        setLoading(false)
        setError(error)
      }
    }

    fetchData()
  }, [dataSource])

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
  layout = ListType.TABLE
}: Props) => {
  let listComponent
  const { items, loading, error } = useDataFetching(dataSource)

  switch(layout) {
    default:
        listComponent = <ListTable 
          headers={headers} 
          listContent={getListContent(items)} 
          loading={loading}
          error={error}
        />
  }

  return listComponent
}

export default List