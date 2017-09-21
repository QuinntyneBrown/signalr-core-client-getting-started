const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
        'app': './src/main'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "dist/"
    },
    resolve: {
        extensions: ['.ts', '.css', '.html', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'awesome-typescript-loader'
                }]
            },
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loaders: ['html-loader'] },
        ]
    },
    plugins: [
    ]
};