const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
    entry: ['./src/app/index.js'],
    mode: 'development',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        historyApiFallback: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            filename: './index.html'
        })
    ],
};