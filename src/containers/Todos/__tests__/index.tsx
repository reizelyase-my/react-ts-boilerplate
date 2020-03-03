import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { mount, shallow } from 'enzyme'
import * as Actions from '@actions/global'
import List from '@components/List'
import reducer from '@reducers/index'
import Todos from '../'
import { act } from '@testing-library/react'

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn()
}))

describe("Todos", () => {
  let wrapper: any
  let useEffect: any
  let setPageTitle: any

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect")
    setPageTitle = jest.spyOn(Actions, "setPageTitle")

    const mockUseEffect = () => {
      useEffect.mockImplementationOnce((f: any) => f())
    }

    mockUseEffect()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it("should render", () => {
    const todoWrapper = shallow(<Todos />)

    expect(todoWrapper.exists()).toBe(true)
  })

  it("should set page title", () => {
    act(() => {
      wrapper = mount(<Todos />)
    })

    expect(setPageTitle).toHaveBeenCalledTimes(1)
    expect(setPageTitle).toHaveBeenCalledWith("Todos")
  })

  it("should contain List component", () => {
    act(() => {
      wrapper = mount(<Todos />)
    })

    expect(wrapper.children(List).length).toEqual(1)
  })
})