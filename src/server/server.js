
import path from 'path'
import Express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from '../common/configureStore'
import App from '../common/container'

const renderPage = (html, preloadedState) => `
  <!doctype html>
  <html>
    <head>
      <title>My Color</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <script src="/app.js"></script>
    </body>
  </html>
`

const handleRender = (req, res) => {

  const preloadedState = {}

  const store = configureStore(preloadedState)

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const finalState = store.getState()

  res.send(renderPage(html, finalState))

}

// ---

const app = new Express
const port = 3210

const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(handleRender)

app.listen(port, (err) => {
  if (err) return console.error(err)
  console.info(`Listening on port ${port}.`)
})
