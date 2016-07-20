
import 'babel-polyfill'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './common/configureStore'
import MyColor from './common/container'

render(
  <Provider store={configureStore(window.__STATE__)}>
    <MyColor/>
  </Provider>,
  document.getElementById('app')
)
