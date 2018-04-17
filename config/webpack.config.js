const path = require('path');

module.exports = {
    entry: {
        index: './javascripts/packs/index.jsx',
        kinen: './javascripts/packs/kinen.jsx'
    },
    output: {
        filename: '[name].js',
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