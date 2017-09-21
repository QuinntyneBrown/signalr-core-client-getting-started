const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        'app': './src/main'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "dist/"
    },
    resolve: {
        extensions: ['.ts','.css','js','.json', '.html']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loaders: ['html-loader'] },
            { test: /\.ts$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/ }
        ]
    }
};
