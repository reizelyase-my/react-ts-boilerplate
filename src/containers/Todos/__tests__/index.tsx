import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { mount, shallow } from 'enzyme'
import * as Actions from '@actions/global'
import List from '@components/List'
import reducer from '@reducers/index'
import Todos from '../'

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn()
}))

describe("Todos", () => {
  let useEffect: any
  let setPageTitle: any

  // const getWrapper = (mockStore = createStore(reducer, { 
  //   global: {
  //     title: "Todos"
  //   },
  //   todos: {
  //     todos: [
  //       {
  //         "userId": 1,
  //         "id": 1,
  //         "title": "delectus aut autem",
  //         "completed": false
  //       },
  //       {
  //         "userId": 1,
  //         "id": 2,
  //         "title": "quis ut nam facilis et officia qui",
  //         "completed": false
  //       },
  //       {
  //         "userId": 1,
  //         "id": 3,
  //         "title": "fugiat veniam minus",
  //         "completed": false
  //       },
  //       {
  //         "userId": 1,
  //         "id": 4,
  //         "title": "et porro tempora",
  //         "completed": true
  //       },
  //       {
  //         "userId": 1,
  //         "id": 5,
  //         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //         "completed": false
  //       }
  //     ],
  //     fetched: true,
  //     fetching: false,
  //     error: {},
  //     currentPage: 1,
  //     limit: 10,
  //     numPages: 1
  //   }
  // })) => mount(
  //   <Provider store={mockStore}>
  //     <Todos />
  //   </Provider>
  // );

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
    const wrapper = mount(<Todos />)

    expect(setPageTitle).toHaveBeenCalledTimes(1)
    expect(setPageTitle).toHaveBeenCalledWith("Todos")
    wrapper.unmount()
  })

  it("should contain List component", () => {
    const wrapper = mount(<Todos />)

    expect(wrapper.children(List).length).toEqual(1)
    wrapper.unmount()
  })

  // it("should render 5 todos", () => {
  //   const wrapper = mount(<Todos />)

  //   expect(wrapper.find("li")).toHaveLength(1)
  // })
})