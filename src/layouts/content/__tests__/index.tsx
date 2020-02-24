import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { mount } from 'enzyme'
import Content from '../'
import reducer from '@reducers/index'

describe("Content", () => {
  const getWrapper = (mockStore = createStore(reducer, { 
    global: {
      title: "Content"
    },
    todos: null
  })) => mount(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should display the title from the state", () => {
    const wrapper = getWrapper()
    
    expect(wrapper.find("h1")).toHaveLength(1)
    expect(wrapper.text()).toEqual("Content")
  })
})