module.exports = {
    entry: './src/app/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
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
    }
};