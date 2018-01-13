const path = require('path')
const cssnext = require('postcss-cssnext')
const WebpackNotifierPlugin = require('webpack-notifier')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const imageCompression = {
    bypassOnDebug: true,
    mozjpeg: { progressive: true, quality: 70 },
    gifsicle: { interlaced: false },
    optipng: { optimizationLevel: 7 },
    pngquant: { quality: '65-90', speed: 4 },
}

module.exports = {
    output: {
        filename: 'bundle.js',
        chunkFilename: 'chunk.[id].js',
        path: path.resolve('./dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1, modules: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [cssnext()] },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
                    { loader: 'image-webpack-loader', query: imageCompression },
                ],
            },
            { test: /\.(eot|ttf|woff|woff2)$/, use: 'file-loader?hash=sha512&digest=hex&name=fonts/[hash].[ext]'}
        ],
    },
    resolve: {
        modules: [path.resolve('./'), path.resolve('./node_modules'), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve('./.dev/index.template.ejs'), inject: 'body' }),
        new ProgressBarPlugin(),
        new WebpackNotifierPlugin(),
    ],
    performance: { hints: false },
}
