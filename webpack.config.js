/**
 * Created by manole on 5/24/16.
 */

'use strict';
let webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/index'
    },
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['.js', '.html']
    },
    module: {
        loaders: [
            {loader: 'html-loader', test: /\.tpl\.html$/, exclude: /\.js/}
        ]
    },
    watch: true
};

