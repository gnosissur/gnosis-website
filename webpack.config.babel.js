import webpack from 'webpack';

const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: "./index.js",
    output: {
        publicPath: '/',
        path: __dirname,
        filename: './build/bundle.js',
    },
    module: {
        loaders: [
            { test: /.jsx?$/, exclude: /node_modules/, loaders: (production ? [] : [ 'react-hot' ]).concat([ 'babel']) }
        ]
    },
    resolve: {
        alias: production ? {
            'react': 'react-lite',
            'react-dom': 'react-lite'
        } : {}
    },
    plugins: (production ? [
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, mangle: true }),
    ] : []),
    cache: true,
    debug: false
};
