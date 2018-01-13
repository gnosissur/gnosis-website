const webpack = require('webpack')
const postcss = require('postcss-cssnext')
const WebpackNotifierPlugin = require('webpack-notifier')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const imageCompression = {
    bypassOnDebug: true,
    mozjpeg: { progressive: true, quality: 60 },
    gifsicle: { interlaced: false },
    optipng: { optimizationLevel: 7 },
    pngquant: { quality: '50-75', speed: 4 },
}

module.exports = env => ({
    entry: './index.js',
    output: {
        filename: './build/bundle.js',
        publicPath: '/',
        path: __dirname,
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        cacheDirectory: true,
                        presets: [
                            ['@babel/preset-env', { modules: false, loose: true, useBuiltIns: 'usage' }],
                            '@babel/preset-stage-0',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            [
                                '@babel/transform-runtime',
                                { helpers: true, polyfill: false, regenerator: true, moduleName: '@babel/runtime' },
                            ]
                        ],
                    },
                },
            },
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
                        options: { plugins: [postcss()] },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=build/assets/[hash].[ext]',
                    { loader: 'image-webpack-loader', query: imageCompression },
                ],
            },
        ],
    },
    resolve: {
        alias: env.prod && {
            react: 'nervjs',
            'react-dom': 'nervjs',
        },
    },
    plugins: [
        new WebpackNotifierPlugin(),
        ...((env.prod && [
            new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
            new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
            new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, mangle: true }),
            new BundleAnalyzerPlugin({ analyzerMode: 'static', defaultSizes: 'gzip' }),
        ]) || []),
    ],
    mode: env.prod ? 'production' : 'dev',
})
