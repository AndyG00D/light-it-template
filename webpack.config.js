const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        test: './src/index.ts',
    },
    mode: "development",
    devtool: "eval",
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: ['./dist', './src'],
        port: 3000,
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                         ]
            }
        ]
    },
    resolve: {
        extensions: ['*','.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Example',
            template: './src/index.html',
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
