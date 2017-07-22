import { Provider } from 'mobx-react'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import stores from './stores'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/lib/codemirror.css'
import './styles'

function container () {
  render(
    <AppContainer>
      <Provider {...stores}>
        <App />
      </Provider>
    </AppContainer>,
    document.querySelector('.root')
  )
}

window.onload = container

if (module.hot) {
  module.hot.accept('./containers/App', container)
}
