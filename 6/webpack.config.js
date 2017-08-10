var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './script.js',
    output: {
        path: __dirname + "/js",
        filename: "scripts.min.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties'],
                }
            }
        ]
    },
}