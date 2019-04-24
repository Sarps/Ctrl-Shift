const path = require('path');

module.exports = {

    entry: './src/index.js',

    mode: 'development',

    devtool: 'source-map',

    target: 'web',

    watch: process.argv.indexOf('--watch') !== -1,

    output: {
        filename: 'ctrl-shift.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'InputJS',
        libraryTarget: 'var',
        umdNamedDefine: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
        ],
    }

};