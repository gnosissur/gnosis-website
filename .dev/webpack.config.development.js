const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const Base = require('./webpack.config.base')

const createAlias = name => (fs.existsSync(`./../${name}`) ? path.resolve(`./../${name}`) : name)

const options = {
    babelrc: false,
    cacheDirectory: true,
    presets: [
        ['@babel/preset-env', { modules: false, loose: true, targets: { chrome: 60 } }],
        '@babel/preset-react',
    ],
    plugins: [
        'react-hot-loader/babel',
        // The following three only due to react-hot-loader having trouble with real classes
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-transform-classes', { loose: true }],
    ],
}

module.exports = {
    ...Base,
    module: {
        rules: [...Base.module.rules, { test: /\.jsx?$/, exclude: /node_modules/, use: { loader: 'babel-loader', options } }],
    },
    entry: ['webpack-hot-middleware/client', 'index.js'],
    plugins: [
        ...Base.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.SourceMapDevToolPlugin(),
    ],
    devServer: { hot: true, contentBase: path.resolve('./'), stats: 'errors-only', historyApiFallback: true },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
}
