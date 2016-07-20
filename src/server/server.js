
import fs from 'fs'
import qs from 'qs'
import path from 'path'
import Express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from '../common/configureStore'
import MyColor from '../common/container'

const renderPage = (html, state) => String(fs.readFileSync(`${__dirname}/../index.html`))
  .replace('%HTML%', html)
  .replace('%STATE%', JSON.stringify(state))

const handleRender = (req, res) => {

  const state = {}
  const store = configureStore(state)

  const html = renderToString(
    <Provider store={store}>
      <MyColor/>
    </Provider>
  )

  const finalState = store.getState()

  res.send(renderPage(html, finalState))
}

// ---

const app = new Express
const port = process.env.PORT

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(Express.static(`${__dirname}/../../static`))

app.use(handleRender)

app.listen(port, (err) => {
  if (err) return console.error(err)
  console.info(`Listening on port ${port}.`)
})
