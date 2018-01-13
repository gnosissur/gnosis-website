const webpack = require('webpack')
const express = require('express')
const middleware = require('webpack-dev-middleware')
const DevConfig = require('./webpack.config.development')
const ProdConfig = require('./webpack.config.production')

// TODO: track https://github.com/jantimon/html-webpack-plugin/pull/823
const compiler = webpack(DevConfig)
const app = express()

app.use(middleware(compiler, { noInfo: true, publicPath: DevConfig.output.publicPath }))
app.use(require('webpack-hot-middleware')(compiler))
app.listen(8080, () => console.log('App listening on port 8080!'))
