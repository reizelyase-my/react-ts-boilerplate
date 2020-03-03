import * as React from 'react'
import { mount, shallow } from 'enzyme'
import { act, render } from '@testing-library/react'
import ListTable from '@components/ListTable'
import List from '../'

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}))
 
describe("List", () => {
  let wrapper: any
  let mockUseDataFetching: any
  let mockGetListContent: any
  let mockProps: any
  
  beforeEach(() => {
    act(() => {
      mockUseDataFetching = jest
        .fn()
        .mockReturnValue({
          items: [],
          loading: false,
          error: null
        })

      mockGetListContent = jest
        .fn()
        .mockReturnValue(<tbody><tr><td>No items found.</td></tr></tbody>)

      mockProps = {
        dataSource: "todos",
        headers: [
          {
            label: "Test",
            fieldName: "test"
          }
        ],
        getListContent: mockGetListContent,
        currentPage: 1,
        numPages: 2
      }
        
      mockUseDataFetching()
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it("should render", () => {
    let todoWrapper: any

    act(() => {
      todoWrapper = shallow(<List {...mockProps} />)
    })

    expect(todoWrapper.exists()).toBe(true)
  })

  it("should fetch from API endpoint based on provided dataSource prop", () => { 
    act(() => {
      wrapper = mount(<List {...mockProps} />)
    })

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos')
  })

  it("should render ListTable if no layout is passed", () => {
    act(() => {
      wrapper = mount(<List {...mockProps} />)
    })

    expect(wrapper.children(ListTable).length).toEqual(1)
  })
})