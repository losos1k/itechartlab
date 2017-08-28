var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "/js",
        filename: "bundle.js",
        publicPath: "/js/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"],
                    plugins: ["transform-decorators-legacy"]
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};

module.exports = config;