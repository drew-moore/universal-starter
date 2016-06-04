const
    webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    helpers = require('./helpers');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /\.spec\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[ext]'
            },
            {
                // this applies to app-wide css
                test: /\.(scss|css)$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap')
            },
            {
                // this applies
                test:/\.(scss|css)$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader!sass'
            }
        ]
    }
};
