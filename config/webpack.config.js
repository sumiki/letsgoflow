const path = require('path');

module.exports = {
    entry: {
        index: './javascripts/packs/index.jsx',
        login: './javascripts/packs/login.jsx'
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
                    presets: [
                        'react',
                        'es2015'
                    ],
                    plugins: [
                        "syntax-dynamic-import",
                        "transform-object-rest-spread",
                        [
                            "transform-class-properties",
                            {
                                "spec": true
                            }
                        ]
                    ]
                }
            }
        ]
    }
};