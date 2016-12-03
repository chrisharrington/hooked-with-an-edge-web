var path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CommonsChunkPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin"),
    LiveReloadPlugin = require("webpack-livereload-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    CleanWebpackPlugin = require("clean-webpack-plugin"),
    WebpackBuildNotifier = require('webpack-build-notifier');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    stats: {
        children: false
    },
    module: {
        loaders: [
            { test: /\.json$/i, loader: "json" },
            { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file?name=/images/[hash].[ext]']},
            { test: /\.htc$/i, loader: "file?name=assets/[hash].[ext]" },
            { test: /\.css$/i, loader: "style!css" },
            { test: /\.(js|jsx)$/i, loader: "babel-loader", query: { presets: ["es2015", "react"] }},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
        ]
    },
    devtool: 'cheap-module-inline-source-map',
    resolve: {
        root: [path.resolve("./node_modules"), path.join(__dirname, "./src")],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new LiveReloadPlugin(),
        new ExtractTextPlugin("bundle.css"),
        new CleanWebpackPlugin(["dist"]),
        new WebpackBuildNotifier({
            title: 'Hooked with an Edge',
            successSound: false
        })
    ]
};
