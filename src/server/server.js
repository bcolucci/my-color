
import fs from 'fs'
import qs from 'qs'
import path from 'path'
import Express from 'express'
import bodyParser from 'body-parser'
import low from 'lowdb'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from '../common/configureStore'
import MyColor from '../common/container'

const renderPage = (html, state) => String(fs.readFileSync(`${__dirname}/../../index.html`))
  .replace('%HTML%', html)
  .replace('%STATE%', JSON.stringify(state))

// ---

const db = low('db.json')
db.defaults({ scores: [] }).value()

const app = new Express
const router = new Express.Router
const port = process.env.PORT

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(Express.static(`${__dirname}/../../static`))

app.use(bodyParser.json())
app.use(router)

router.get('/', (req, res) => {
  const store = configureStore({})
  const html = renderToString(
    <Provider store={store}>
      <MyColor/>
    </Provider>
  )
  res.send(renderPage(html, store.getState()))
})

router.get('/scores', (req, res) => res.json(
  db.get('scores')
  .sort((row1, row2) => row2.score - row1.score)
  .take(5)
  .value()
))

router.get('/replay', (req, res) => {
  const { frame, score, pseudo } = req.query
  if (pseudo)
    db.get('scores').push({
      pseudo,
      frame: Number(frame),
      score: Number(score)
    }).value()
  res.redirect('/')
})

//TODO save
router.post('/save', (req, res) => res.json(req.body))

app.listen(port, (err) => {
  if (err) return console.error(err)
  console.info(`Listening on port ${port}.`)
})
