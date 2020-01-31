import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Wrapper from './layouts/mainWrapper'
import Home from './containers/Home'
import Todos from './containers/Todos'

const Root = () => (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todos" component={Todos} /> 
        </Switch>
      </Wrapper>
    </Router>
)

export default Root