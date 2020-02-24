import * as React from 'react'
import { mount } from 'enzyme'
import * as Actions from '@actions/global'
import Todos from '../'

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}))

describe("Todos", () => {
  let wrapper: any
  let useEffect: any
  let setPageTitle: any

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f: any) => f())
  }

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect")
    setPageTitle = jest.spyOn(Actions, "setPageTitle")

    mockUseEffect()
    wrapper = mount(<Todos />)
  })

  afterEach(() => {
    wrapper.unmount()
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("it should set page title", () => {
    expect(setPageTitle).toHaveBeenCalledTimes(1)
    expect(setPageTitle).toHaveBeenCalledWith("Home")
  })
})