const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Base = require('./webpack.config.base')

const options = {
  babelrc: false,
  cacheDirectory: true,
  presets: [
    ['@babel/preset-env', { modules: false, loose: true, useBuiltIns: 'usage' }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/transform-runtime', { helpers: true, regenerator: true }],
  ],
}

module.exports = {
  ...Base,
  module: {
    rules: [
      ...Base.module.rules,
      { sideEffects: false, test: /\.jsx?$/, exclude: /node_modules/, use: { loader: 'babel-loader', options } },
    ],
  },
  entry: ['index.js'],
  resolve: {
    ...Base.resolve,
    alias: {
      react: 'nervjs',
      'react-dom': 'nervjs',
    },
  },
  plugins: [
    ...Base.plugins,
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: 'static', defaultSizes: 'gzip' }),
    new UglifyJSPlugin({ cache: true, parallel: true }),
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devtool: undefined,
  mode: 'production',
}
