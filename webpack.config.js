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
        extensions: ['.js']
    },
    module: {
        loaders: [
            {loader: 'raw', test: /\.tpl\.html$/}
        ]
    },
    watch: true
};

