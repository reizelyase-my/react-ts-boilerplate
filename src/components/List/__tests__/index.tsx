import * as React from 'react'
import { mount, shallow } from 'enzyme'
import fetch from 'jest-fetch-mock'
import { act, render } from '@testing-library/react'
import ListTable from '@components/ListTable'
import List, { useDataFetching } from '../'

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}))

jest.setMock('node-fetch', fetch)

const mockUseDataFetching = jest.fn()
mockUseDataFetching.mockReturnValue({
  items: [],
  loading: false,
  error: null
})

const mockGetListContent = jest.fn()
mockGetListContent.mockReturnValue(<tbody><tr><td>No items found.</td></tr></tbody>)

const mockProps = {
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

describe.only("List", () => {
  let wrapper: any

  beforeEach(() => {
    act(() => {
      mockUseDataFetching()

      wrapper = mount(<List {...mockProps} />)
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it("should render", () => {
    const todoWrapper = shallow(<List {...mockProps} />)

    expect(todoWrapper.exists()).toBe(true)
  })

  it("should fetch from API endpoint based on provided dataSource prop", () => { 
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  it("should render ListTable if no layout is passed", () => {
    expect(wrapper.children(ListTable).length).toEqual(1)
    wrapper.unmount()
  })
})