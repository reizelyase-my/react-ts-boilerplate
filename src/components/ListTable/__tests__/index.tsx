import * as React from 'react'
import { mount, shallow } from 'enzyme'
import { Spinner, Table } from 'react-bootstrap'
import * as Actions from '@actions/todos'
import Pages from '@components/Pagination'
import ListTable from '../'
import styles from '../listTable.scss'

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}))

const mockListContent = <tbody>
  <tr>
    <td>Test</td>
  </tr>
</tbody>

const mockSetCurrentPage = jest.fn()
const mockProps = {
  error: "",
  loading: false,
  headers: [
    {
      label: "Title",
      fieldName: "title"
    }
  ],
  listContent: mockListContent,
  currentPage: 1,
  numPages: 10,
  setCurrentPage: mockSetCurrentPage
}

describe("ListTable", () => {
  let setCurrentPage: any

  beforeEach(() => {
    setCurrentPage = jest.spyOn(Actions, "setCurrentPage")
  })

  it("should render", () => {
    const wrapper = shallow(<ListTable {...mockProps} />)

    expect(wrapper.exists()).toBe(true)
  })

  it("should render a Spinner if still loading", () => {
    const loadingMockProps = {
      ...mockProps,
      loading: true
    }
    const wrapper = mount(<ListTable {...loadingMockProps} />)

    expect(wrapper.children(Spinner).length).toEqual(1)
    wrapper.unmount()
  })

  it("should render a div enclosing Table and Pagination components", () => {
    const wrapper = mount(<ListTable {...mockProps} />)

    expect(wrapper.find("div").length).toEqual(1)
    wrapper.unmount()
  })

  it("should display a table for the items", () => {
    const wrapper = mount(<ListTable {...mockProps} />)

    expect(wrapper.find(Table).length).toEqual(1)
    wrapper.unmount()
  })

  it("should render pagination", () => {
    const wrapper = mount(<ListTable {...mockProps} />)

    expect(wrapper.find(Pages).length).toEqual(1)
    wrapper.unmount()
  })
})