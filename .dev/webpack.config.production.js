const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ZopfliPlugin = require('zopfli-webpack-plugin')
const Base = require('./webpack.config.base')

const options = {
    babelrc: false,
    cacheDirectory: true,
    presets: [['@babel/preset-env', { modules: false, loose: true, useBuiltIns: 'usage' }], '@babel/preset-stage-0', '@babel/preset-react'],
    plugins: [['@babel/transform-runtime', { helpers: true, polyfill: false, regenerator: true, moduleName: '@babel/runtime' }]],
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
        new ZopfliPlugin({
            asset: '[path].gz[query]',
            algorithm: 'zopfli',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ async: true, children: true, minChunks: 2 }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: module => /(node_modules)/.test(module.resource),
        }),
    ],
    devtool: undefined,
    /*optimization: {
        initialCommonsChunks: true,
        initialVendorsChunk: true,
    },*/
    mode: 'production',
}
