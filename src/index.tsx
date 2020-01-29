import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
    <div>Hello</div>,
    document.getElementById("root")
);

if((module as any).hot) {
    (module as any).hot.accept() // eslint-disable-line no-undef  
}
