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
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ["@babel/plugin-proposal-class-properties"]
                        ]
                    }
                },
            },
        ],
    }

};