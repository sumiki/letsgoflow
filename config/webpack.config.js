const path = require('path');

module.exports = {
    entry: './javascripts/packs/index.jsx',
    output: {
        filename: 'index.js',
        path: path.resolve('./static', 'packs')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    }
};