const path = require('path');

module.exports = {

    entry: './src/index.js',

    mode: 'development',

    devtool: 'source-map',

    target: 'web',

    watch: true,

    output: {
        filename: 'inputjs.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'InputJS',
        libraryTarget: 'var',
        umdNamedDefine: true,
    },

    module: {
        rules: [
            {
                test: /\.js?$/g,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        ["transform-class-properties", { "spec": true }]
                        //[require("@babel/plugin-proposal-class-properties"), {loose: true}]
                    ]
                },
            },
        ]
    }

};