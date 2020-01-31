import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Root from './routes'
import './styles'

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById("root")
);

if((module as any).hot) {
    (module as any).hot.accept() // eslint-disable-line no-undef  
}
